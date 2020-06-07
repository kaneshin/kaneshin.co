package main

import (
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/mux"

	"github.com/kaneshin/kaneshin.co/backend"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/ping", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("pong"))
	}).Methods("GET")

	r.HandleFunc("/status/{code}", func(w http.ResponseWriter, r *http.Request) {
		vars := mux.Vars(r)
		switch vars["code"] {
		case "400":
			backend.BadRequestResponseWriter(w, "")
		case "404":
			backend.NotFoundResponseWriter(w, "")
		default:
			backend.BadRequestResponseWriter(w, "Invalid status code")
		}
	})

	v1 := r.PathPrefix("/1.0").Subrouter()
	v1.HandleFunc("/users/{id}", func(w http.ResponseWriter, r *http.Request) {
		vars := mux.Vars(r)
		id := vars["id"]
		backend.UsersResponseWriter(w, id)
	}).Methods("GET")

	v1.HandleFunc("/posts", func(w http.ResponseWriter, r *http.Request) {
		backend.PostsResponseWriter(w)
	}).Methods("GET")

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s", port)
	}

	log.Printf("Listening on port %s", port)
	srv := &http.Server{
		Handler:      r,
		Addr:         ":" + port,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Fatal(srv.ListenAndServe())
}
