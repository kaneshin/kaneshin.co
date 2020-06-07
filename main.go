package main

import (
	"net/http"

	"google.golang.org/appengine"

	"github.com/kaneshin/kaneshin.co/backend"
)

func main() {
	http.HandleFunc("/1.0/ping", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			w.Write([]byte("pong"))
		default:
			backend.MethodNotAllowedResponseWriter(w, "")
			return
		}
	})

	http.HandleFunc("/1.0/user", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			ctx := appengine.NewContext(r)
			backend.UsersResponseWriter(ctx, w, "kaneshin0120@gmail.com")
		default:
		}
	})

	http.HandleFunc("/1.0/posts", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			ctx := appengine.NewContext(r)
			backend.PostsResponseWriter(ctx, w)
		default:
			backend.MethodNotAllowedResponseWriter(w, "")
			return
		}
	})

	appengine.Main()
}
