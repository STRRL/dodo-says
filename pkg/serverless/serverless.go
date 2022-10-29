package serverless

import "github.com/gin-gonic/gin"

func NewServerlessGinApp() *gin.Engine {
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
	return app
}
