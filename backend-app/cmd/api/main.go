package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"backend/internal/db"
)

const port = 9000

type application struct {
	DB *sql.DB
}

func main() {
	database := db.Connect()

	app := &application{DB: database}

	log.Printf("Connected to MySQL and starting server on port %d", port)

	err := http.ListenAndServe(fmt.Sprintf(":%d", port), app.routes())
	if err != nil {
		log.Fatal(err)
	}
}
