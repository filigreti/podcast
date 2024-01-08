package models

import (
	"mime/multipart"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type CoverArtUpload struct {
	FileHeader *multipart.FileHeader `form:"coverArtUpload" validate:"required"`
}
// Podcast represents information about a podcast.
type Podcast struct {
	ID             primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Title          string             `bson:"title" json:"title" validate:"required"`
	Description    string             `bson:"description" json:"description"`
	CoverArtURL    string             `bson:"coverArtURL" json:"coverArtURL" validate:"url"`
	Author         string             `bson:"author" json:"author"`
	CreatorID      primitive.ObjectID `bson:"creatorID" json:"creatorID"`
	CategoryID     primitive.ObjectID `bson:"categoryID" json:"categoryID"`
	Ratings        []Rating           `bson:"ratings" json:"ratings"`
	LiveSessionID  string             `bson:"liveSessionID" json:"liveSessionID"`
	LiveStreamURL  string             `bson:"liveStreamURL" json:"liveStreamURL"`
	CurrentViewers int                `bson:"currentViewers" json:"currentViewers"`
	EpisodeIDs     []primitive.ObjectID `bson:"episodeIDs" json:"episodeIDs"`
	Tags		   []string           `bson:"tags" json:"tags"`
}

// Episode represents information about a podcast episode.
type Episode struct {
	ID          primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	PodcastID   primitive.ObjectID `bson:"podcastID" json:"podcastID"`
	Title       string             `bson:"title" json:"title" validate:"required"`
	Description string             `bson:"description" json:"description"`
	AudioURL    string             `bson:"audioURL" json:"audioURL" validate:"url"`
	ReleaseDate time.Time          `bson:"releaseDate" json:"releaseDate" format:"2006-01-02"`
	Duration    time.Duration      `bson:"duration" json:"duration" unit:"seconds"`
}

// Subscription represents a user's subscription to a podcast.
type Subscription struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	UserID       primitive.ObjectID `bson:"userID" json:"userID"`
	PodcastID    primitive.ObjectID `bson:"podcastID" json:"podcastID"`
	IsSubscribed bool               `bson:"isSubscribed" json:"isSubscribed"`
}

// Comment represents a user's comment on an episode.
type Comment struct {
	ID        primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	UserID    primitive.ObjectID `bson:"userID" json:"userID"`
	EpisodeID primitive.ObjectID `bson:"episodeID" json:"episodeID"`
	Text      string             `bson:"text" json:"text" validate:"required"`
	CreatedAt time.Time          `bson:"createdAt" json:"createdAt"`
}

// Rating represents a user's rating for an episode.
type Rating struct {
	ID        primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	UserID    primitive.ObjectID `bson:"userID" json:"userID"`
	EpisodeID primitive.ObjectID `bson:"episodeID" json:"episodeID"`
	Score     int                `bson:"score" json:"score"`
}

// Genre represents a podcast genre or category.
type Category struct {
	ID   primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Name string             `bson:"name" json:"name"`
}

// AppConfig represents general application settings.
type AppConfig struct {
	Language     string `bson:"language" json:"language"`
	Notification bool   `bson:"notification" json:"notification"`
	// Other app-related settings
}
