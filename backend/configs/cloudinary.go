package configs

import (
	"github.com/cloudinary/cloudinary-go/v2"
)

var CloudinaryName = []byte(GetEnv("CLOUDINARY_CLOUD_NAME"))
var CloudinaryApiSecret = []byte(GetEnv("CLOUDINARY_API_SECRET"))
var CloudinaryApiKey = []byte(GetEnv("CLOUDINARY_API_KEY"))


func SetupCloudinary() (*cloudinary.Cloudinary, error) {
    cldSecret := string(CloudinaryApiSecret)
    cldName := string(CloudinaryName)
    cldKey := string(CloudinaryApiKey)

    cld, err := cloudinary.NewFromParams(cldName, cldKey, cldSecret)
    if err != nil {
        return nil, err
    }

    return cld, nil
}
