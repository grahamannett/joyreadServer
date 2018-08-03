package home

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Home ...
func Home(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", "")
}
