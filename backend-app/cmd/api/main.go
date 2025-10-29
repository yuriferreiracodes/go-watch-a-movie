package main

import (
	"fmt"
	"log"
	"net/http"
)

const port = 9000

type application struct {
	Domain string
}

func main() {
	app := &application{
		Domain: "example.com",
	}

	log.Printf("Starting application on port %d", port)

	err := http.ListenAndServe(fmt.Sprintf(":%d", port), app.routes())
	if err != nil {
		log.Fatal(err)
	}
}
