package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/strrl/dodo-says/pkg/serverless"
)

var app *gin.Engine

func init() {
	var err error
	app, err = serverless.BootstrapServerlessGinApp("mysql", "root@tcp(127.0.0.1:4000)/dodo_says_dev")
	if err != nil {
		panic(err)
	}
}

func Handler(w http.ResponseWriter, r *http.Request) {
	app.ServeHTTP(w, r)
}
