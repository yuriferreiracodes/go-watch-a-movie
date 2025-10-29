package main

import (
    "encoding/json"
    "net/http"
    "time"
    
    "backend/internal/models"
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
        http.Error(w, err.Error(), http.StatusInternalServerError)
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
		Description: "An immortal Scottish swordsman must confront his centuries-old nemesis in a battle for the Prize.",
		Image:       "highlander.jpg",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	matrix := models.Movie{
		ID:          2,
		Title:       "The Matrix",
		ReleaseDate: time.Date(1999, time.March, 31, 0, 0, 0, 0, time.UTC),
		RunTime:     136,
		MPAARating:  "R",
		Description: "A computer hacker learns the true nature of reality and his role in the war against its controllers.",
		Image:       "matrix.jpg",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	underworld := models.Movie{
		ID:          3,
		Title:       "Underworld",
		ReleaseDate: time.Date(2003, time.September, 19, 0, 0, 0, 0, time.UTC),
		RunTime:     121,
		MPAARating:  "R",
		Description: "A vampire warrior becomes embroiled in a war between vampires and werewolves.",
		Image:       "underworld.jpg",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}
    
	movies = append(movies, highlander, matrix, underworld)  

    out, err := json.Marshal(movies)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)
    w.Write(out)
}