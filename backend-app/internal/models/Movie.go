package models

import "time"

type Movie struct {
	ID          int        `json:"id"`
	Title       string     `json:"title"`
	Description string     `json:"description"`
	ReleaseYear int        `json:"release_year"`
	Genre       string     `json:"genre"`
	Director    string     `json:"director"`
	Rating      float64    `json:"rating"`
	CreatedAt   time.Time  `json:"created_at"`
	UpdatedAt   time.Time  `json:"updated_at"`
	DeletedAt   *time.Time `json:"deleted_at"`
}
