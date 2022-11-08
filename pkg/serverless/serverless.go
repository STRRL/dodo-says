package serverless

import (
	"context"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gin-gonic/gin"
	"github.com/pkg/errors"
	"github.com/strrl/dodo-says/ent"
	"github.com/strrl/dodo-says/ent/migrate"
	"github.com/strrl/dodo-says/gql"
)

func BootstrapServerlessGinApp(driverName, dataSourceName string) (*gin.Engine, error) {
	client, err := ent.Open(driverName, dataSourceName)
	if err != nil {
		return nil, errors.Wrapf(err, "open database connection")
	}
	if err := client.Schema.Create(
		context.Background(),
		migrate.WithGlobalUniqueID(true),
	); err != nil {
		return nil, errors.Wrapf(err, "create graphql schema")
	}

	server := handler.NewDefaultServer(gql.NewSchema(client))

	app := gin.Default()
	router := app.Group("/api/dodo")
	router.GET("/", func(c *gin.Context) {
		c.Data(200, "text/plain; charset=utf-8", []byte("🦤 dodo says hello."))
	})
	router.GET("/healthz", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "ok",
		})
	})
	router.GET("/playground", gin.WrapF(playground.Handler("", "/api/dodo/query")))
	router.Any("/query", gin.WrapH(server))
	return app, nil
}
