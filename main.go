package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"sync"
	"time"

	"github.com/gorilla/mux"
)

type (
	Name struct {
		GivenName  string `json:"givenName"`
		FamilyName string `json:"familyName"`
		Nickname   string `json:"nickname"`
	}

	Address struct {
		State   string `json:"state"`
		Country string `json:"region"`
	}

	Organization struct {
		Name        string `json:"name"`
		Title       string `json:"title"`
		Description string `json:"description"`
	}

	User struct {
		PrimaryEmail        string       `json:"primaryEmail"`
		PrimaryPhone        string       `json:"primaryPhone"`
		Name                Name         `json:"name"`
		Address             Address      `json:"address"`
		PrimaryOrganization Organization `json:"primaryOrganization"`
	}
)

func pingHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("pong"))
}

const kaneshinPrimaryEmail = "kaneshin0120@gmail.com"

var users sync.Map

func init() {
	users.Store(kaneshinPrimaryEmail, User{
		PrimaryEmail: kaneshinPrimaryEmail,
		PrimaryPhone: "+81 90-5583-5803",
		Name: Name{
			GivenName:  "Shintaro",
			FamilyName: "Kaneko",
			Nickname:   "kaneshin",
		},
		Address: Address{
			State:   "Tokyo",
			Country: "Japan",
		},
		PrimaryOrganization: Organization{
			Name:        "Eureka, Inc.",
			Title:       "CTO",
			Description: "Chief Technology Officer",
		},
	})
}

func usersHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	v, ok := users.Load(vars["id"])
	if ok {
		u, ok := v.(User)
		if ok {
			u.PrimaryEmail = ""
			u.PrimaryPhone = ""
			json.NewEncoder(w).Encode(u)
			return
		}
		json.NewEncoder(w).Encode(v)
		return
	}
	json.NewEncoder(w).Encode(User{})
}

func photosHandler(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(map[string]interface{}{})
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/ping", pingHandler).Methods("GET")
	r.HandleFunc("/directory/v1/users/{id}", usersHandler).Methods("GET")
	r.HandleFunc("/directory/v1/users/{id}/photos", photosHandler).Methods("GET")

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
