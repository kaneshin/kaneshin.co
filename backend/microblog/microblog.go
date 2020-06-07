package microblog

import (
	"encoding/json"
	"net/http"
	"time"
)

type (
	PostsData struct {
		Items  []ItemData `json:"items"`
		Author AuthorData `json:"author"`
	}

	AuthorData struct {
		Name   string `json:"name"`
		URL    string `json:"url"`
		Avatar string `json:"avatar"`
	}

	ItemData struct {
		ID            string     `json:"id"`
		ContentHTML   string     `json:"content_html"`
		URL           string     `json:"url"`
		DatePublished time.Time  `json:"date_published"`
		Author        AuthorData `json:"author"`
	}
)

func Posts(username string) (*PostsData, error) {
	resp, err := http.Get("https://micro.blog/posts/" + username)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	var data PostsData
	err = json.NewDecoder(resp.Body).Decode(&data)
	if err != nil {
		return nil, err
	}
	return &data, nil
}
