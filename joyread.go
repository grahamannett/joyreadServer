package joyread

import (
	// built-in packages
	"database/sql"
	"fmt"
	"os"
	"path"
	"strconv"

	// vendor packages
	"github.com/gin-gonic/gin"

	// custom packages
	"github.com/joyread/server/books"
	cError "github.com/joyread/server/error"
	"github.com/joyread/server/getenv"
	"github.com/joyread/server/home"
	"github.com/joyread/server/middleware"
	"github.com/joyread/server/models"
	"github.com/joyread/server/onboard"
)

const (
	portDefault      = "8080"
	portEnv          = "JOYREAD_PORT"
	dbPathEnv        = "JOYREAD_DB_PATH"
	dbPathDefault    = "."
	assetPathEnv     = "JOYREAD_ASSET_PATH"
	assetPathDefault = "."
)

var (
	serverPort = portDefault
	dbPath     = dbPathDefault
	assetPath  = assetPathDefault
)

func init() {
	fmt.Println("Running init ...")
	serverPort = getenv.GetEnv(portEnv, portDefault)
	dbPath = getenv.GetEnv(dbPathEnv, dbPathDefault)
	assetPath = getenv.GetEnv(assetPathEnv, assetPathDefault)
}

// StartServer handles the URL routes and starts the server
func StartServer() {
	// Gin initiate
	r := gin.Default()

	// Serve static files
	r.Static("/service-worker.js", path.Join(assetPath, "build/service-worker.js"))
	r.Static("/static", path.Join(assetPath, "build/static"))
	r.Static("/cover", path.Join(assetPath, "uploads/img"))

	// HTML rendering
	r.LoadHTMLGlob(path.Join(assetPath, "build/index.html"))

	// Open sqlite3 database
	db, err := sql.Open("sqlite3", path.Join(dbPath, "joyread.db"))
	cError.CheckError(err)

	// Close sqlite3 database when all the functions are done
	defer db.Close()

	// Use CORSMiddleware
	r.Use(
		middleware.CORSMiddleware(),
		middleware.APIMiddleware(db),
	)

	models.CreateUser(db)
	models.CreateSMTP(db)

	// Gin handlers
	r.GET("/", home.Home)
	r.GET("/signin", home.Home)
	r.POST("/signin", onboard.PostSignIn)
	r.GET("/signup", home.Home)
	r.POST("/signup", onboard.PostSignUp)
	r.GET("/books", books.GetBooks)

	// Listen and serve
	port, err := strconv.Atoi(serverPort)
	if err != nil {
		fmt.Println("Invalid port specified")
		os.Exit(1)
	}
	r.Run(fmt.Sprintf(":%d", port))
}
