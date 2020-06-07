package backend

import (
	"fmt"
	"net/http"
	"sync"

	"github.com/unrolled/render"

	"github.com/kaneshin/kaneshin.co/backend/microblog"
)

type Error struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}

var rndr = render.New()

func errorResposneWriter(w http.ResponseWriter, code int, message string) {
	rndr.JSON(w, code, map[string]interface{}{
		"error": Error{
			Code:    code,
			Message: message,
		},
	})
}

func BadRequestResponseWriter(w http.ResponseWriter, message string) {
	if message == "" {
		message = "Bad Request"
	}
	errorResposneWriter(w, http.StatusBadRequest, message)
}

func NotFoundResponseWriter(w http.ResponseWriter, message string) {
	if message == "" {
		message = "Not Found"
	}
	errorResposneWriter(w, http.StatusNotFound, message)
}

func PostsResponseWriter(w http.ResponseWriter) {
	posts, err := microblog.Posts("kaneshin")
	if err != nil {
		BadRequestResponseWriter(w, err.Error())
		return
	}
	rndr.JSON(w, http.StatusOK, posts)
}

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

func UsersResponseWriter(w http.ResponseWriter, id string) {
	v, ok := users.Load(id)
	if ok {
		u, ok := v.(User)
		if ok {
			u.PrimaryEmail = ""
			u.PrimaryPhone = ""
			rndr.JSON(w, http.StatusOK, u)
			return
		}
	}
	NotFoundResponseWriter(w, fmt.Sprintf("Not Found: %s", id))
}
