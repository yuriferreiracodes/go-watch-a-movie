package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request) {
	payload := struct {
		Status  string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status:  "active",
		Message: "Go Movies up and running",
		Version: "1.0.0",
	}

	out, err := json.Marshal(payload)
	if err != nil {
		fmt.Println(err)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}

func (app *application) AllMovies(w http.ResponseWriter, r *http.Request) {
	var movies []models.Movie

	highlander := models.Movie{
		ID:          1,
		Title:       "Highlander",
		ReleaseDate: time.Date(1986, time.March, 7, 0, 0, 0, 0, time.UTC),
		RunTime:     116,
		MPAARating:  "R",
		Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		Image:       "highlander.jpg",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	movies = append(movies.highlander)
}