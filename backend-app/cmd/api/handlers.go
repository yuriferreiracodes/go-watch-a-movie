package main

import (
    "encoding/json"
    "net/http"

    "backend/internal/db"
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
	db := db.Connect()
	defer db.Close()

	rows, _ := db.Query("SELECT id, title, description, release_date, runtime, mpaa_rating, image FROM movies")
	defer rows.Close()

	var movies []models.Movie
	for rows.Next() {
		var m models.Movie
		rows.Scan(&m.ID, &m.Title, &m.Description, &m.ReleaseDate, &m.RunTime, &m.MPAARating, &m.Image)
		movies = append(movies, m)
	}

	json.NewEncoder(w).Encode(movies)
}