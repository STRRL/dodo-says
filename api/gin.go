package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/strrl/dodo-says/pkg/serverless"
)

var app *gin.Engine

func init() {
	app = serverless.NewServerlessGinApp()
}

func Handler(w http.ResponseWriter, r *http.Request) {
	app.ServeHTTP(w, r)
}
