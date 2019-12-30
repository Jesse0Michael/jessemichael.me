/*
 * jessemichael.me internal
 *
 * Internal workings of Jesse Michael
 *
 * API version: v1
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package fetcher

import (
	"encoding/json"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
)

// A DefaultApiController binds http requests to an api service and writes the service results to the http response
type DefaultApiController struct {
	service DefaultApiServicer
}

// NewDefaultApiController creates a default api controller
func NewDefaultApiController(s DefaultApiServicer) Router {
	return &DefaultApiController{ service: s }
}

// Routes returns all of the api route for the DefaultApiController
func (c *DefaultApiController) Routes() Routes {
	return Routes{ 
		{
			"GetFeed",
			strings.ToUpper("Get"),
			"/v1/feed",
			c.GetFeed,
		},
	}
}

// GetFeed - Get feed
func (c *DefaultApiController) GetFeed(w http.ResponseWriter, r *http.Request) { 
	result, err := c.service.GetFeed()
	if err != nil {
		w.WriteHeader(500)
		return
	}
	
	EncodeJSONResponse(result, nil, w)
}
