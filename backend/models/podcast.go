package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Podcast represents information about a podcast.
type Podcast struct {
	ID             primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Title          string             `bson:"title" json:"title"`
	Description    string             `bson:"description" json:"description"`
	CoverArtURL    string             `bson:"coverArtURL" json:"coverArtURL"`
	Author         string             `bson:"author" json:"author"`
	CreatorID      primitive.ObjectID `bson:"creatorID" json:"creatorID"`           // ID of the user who created the podcast
	GenreID        primitive.ObjectID `bson:"genreID" json:"genreID"`               // ID of the genre associated with the podcast
	Ratings        []Rating           `bson:"ratings" json:"ratings"`               // Ratings associated with the podcast
	LiveSessionID  string             `bson:"liveSessionID" json:"liveSessionID"`   // ID of the live session associated with the podcast
	LiveStreamURL  string             `bson:"liveStreamURL" json:"liveStreamURL"`   // URL for live streaming, if applicable
	CurrentViewers int                `bson:"currentViewers" json:"currentViewers"` // Number of current viewers in the live session
}

// Episode represents information about a podcast episode.
type Episode struct {
	ID          primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	PodcastID   primitive.ObjectID `bson:"podcastID" json:"podcastID"`
	Title       string             `bson:"title" json:"title"`
	Description string             `bson:"description" json:"description"`
	AudioURL    string             `bson:"audioURL" json:"audioURL"`
	ReleaseDate time.Time          `bson:"releaseDate" json:"releaseDate"`
	Duration    time.Duration      `bson:"duration" json:"duration"`
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
	Text      string             `bson:"text" json:"text"`
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
type Genre struct {
	ID   primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Name string             `bson:"name" json:"name"`
}

// AppConfig represents general application settings.
type AppConfig struct {
	Language     string `bson:"language" json:"language"`
	Notification bool   `bson:"notification" json:"notification"`
	// Other app-related settings
}
