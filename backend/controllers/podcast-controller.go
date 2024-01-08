package controllers

import (
	"context"
	"fmt"
	"mime/multipart"
	"net/http"
	"time"

	"github.com/cloudinary/cloudinary-go/v2/api/uploader"
	"github.com/filigreti/podcast-backend/configs"
	"github.com/filigreti/podcast-backend/models"
	responses "github.com/filigreti/podcast-backend/utils"
	"github.com/labstack/echo/v4"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// var host = configs.GetEnv("LIVEKIT_URL")
// var apiKey = configs.GetEnv("LIVEKIT_KEY")
// var apiSecret = configs.GetEnv("LIVEKIT_SECRET")

// var roomClient = lksdk.NewRoomServiceClient(host, apiKey, apiSecret)

var podcastCollection *mongo.Collection = configs.GetCollection(configs.DB, "podcast")
var categoriesCollection *mongo.Collection = configs.GetCollection(configs.DB, "categories")



func CreatePodcastHandler(c echo.Context) error {
	// Parse request body and validate data
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var podcast models.Podcast
	var coverArtUpload models.CoverArtUpload

	if err := c.Bind(&podcast); err != nil {
		return c.JSON(http.StatusBadRequest, responses.UserResponse{
			Status:  http.StatusBadRequest,
			Message: "error",
			Data:    &echo.Map{"error": err.Error()},
		})
	}

	if validationErr := validate.Struct(&podcast); validationErr != nil {
		return c.JSON(http.StatusBadRequest, responses.UserResponse{
			Status:  http.StatusBadRequest,
			Message: "error",
			Data:    &echo.Map{"validation_error": validationErr.Error()},
		})
	}

	existingPodcastTitle := models.Podcast{}
	err := podcastCollection.FindOne(ctx, bson.M{"title": podcast.Title}).Decode(&existingPodcastTitle)
	if err == nil {
		// Podcast title already exists, return an error
		return c.JSON(http.StatusConflict, responses.UserResponse{
			Status:  http.StatusConflict,
			Message: "error",
			Data:    &echo.Map{"error": "Podcast title already exists"},
		})
	} else if err != mongo.ErrNoDocuments {
		// Some other error occurred
		return c.JSON(http.StatusInternalServerError, responses.UserResponse{
			Status:  http.StatusInternalServerError,
			Message: "error",
			Data:    &echo.Map{"error": err.Error()},
		})
	}

	// Bind the cover art file separately
	if err := c.Bind(&coverArtUpload); err != nil {
		errorMessage := fmt.Sprintf("Failed to bind cover art file: %s", err.Error())
		return c.JSON(http.StatusBadRequest, responses.UserResponse{Status: http.StatusBadRequest, Message: "error", Data: &echo.Map{"data": errorMessage}})
	}

	  if coverArtUpload.FileHeader != nil {
        // File exists, upload to Cloudinary
        cloudinaryURL, err := UploadToCloudinary(coverArtUpload.FileHeader)
        if err != nil {
            // Handle the error, e.g., return an error response with a specific message
            errorMessage := fmt.Sprintf("Failed to upload cover art to Cloudinary: %s", err.Error())
            return c.JSON(http.StatusInternalServerError, responses.UserResponse{Status: http.StatusInternalServerError, Message: "Failed to upload cover art to Cloudinary",Data: &echo.Map{"data": errorMessage}})
        }

        // Assign the Cloudinary URL to the podcast's CoverArtURL field
        podcast.CoverArtURL = cloudinaryURL
    }

	// Check if a podcast with the same title already exists


	// Create the podcast in the database
	result, err := podcastCollection.InsertOne(ctx, podcast)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, responses.UserResponse{
			Message: "Failed to create podcast",
			Data:    &echo.Map{"error": err.Error()},
		})
	}

	// Return a success response with the InsertOneResult
	return c.JSON(http.StatusCreated, responses.UserResponse{
		Message: "Podcast created successfully",
		Data:    &echo.Map{"result": result},
	})
}

func UploadToCloudinary(file *multipart.FileHeader) (string, error) {
    ctx := context.Background()
    cld, err := configs.SetupCloudinary()
    if err != nil {
        return "", err
    }
	uploadParams := uploader.UploadParams{PublicID: file.Filename}
	result, err := cld.Upload.Upload(ctx, file, uploadParams)

	if err != nil {
    return "", err
	}
	imageUrl := result.SecureURL
	return imageUrl, nil	
}

func GetCategories(c echo.Context) error {
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()

    // Assuming you have a collection for categories named "categoriesCollection"
	options := options.Find().SetSort(bson.D{{"name", 1}}) 
    categoriesCursor, err := categoriesCollection.Find(ctx, bson.M{}, options)
    if err != nil {
        return c.JSON(http.StatusInternalServerError, responses.UserResponse{
            Status:  http.StatusInternalServerError,
            Message: "error",
            Data:    &echo.Map{"error": err.Error()},
        })
    }

    var categories []models.Category
    if err := categoriesCursor.All(ctx, &categories); err != nil {
        return c.JSON(http.StatusInternalServerError, responses.UserResponse{
            Status:  http.StatusInternalServerError,
            Message: "error",
            Data:    &echo.Map{"error": err.Error()},
        })
    }

    return c.JSON(http.StatusOK, responses.UserResponse{
        Status:  http.StatusOK,
        Message: "success",
        Data:    &echo.Map{"categories": categories},
    })
}