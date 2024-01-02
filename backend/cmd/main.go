package main

import (
	"github.com/filigreti/podcast-backend/configs"
	"github.com/filigreti/podcast-backend/routes"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func init() {
	// Initialize MongoDB first
	configs.ConnectDB()
	configs.ConnectRedis()
}
func main() {
	e := echo.New()
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))
	routes.UserRoute(e)
	e.Logger.Fatal(e.Start(configs.GetEnv("BASE_URL")))

}
