package models

import "time"

type Movie struct {
	ID          int        `json:"id"`
	Title       string     `json:"title"`
	Description string     `json:"description"`
	ReleaseDate time.Time  `json:"release_date"`
	RunTime     int        `json:"runtime"`
	MPAARating  string     `json:"mpaa_rating"`
	Image       string     `json:"image"`
	CreatedAt   time.Time  `json:"created_at"`
	UpdatedAt   time.Time  `json:"updated_at"`
	DeletedAt   *time.Time `json:"deleted_at"`
}
