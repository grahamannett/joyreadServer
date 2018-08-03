package main

import (
	joyread "github.com/joyread/server"
	_ "github.com/mattn/go-sqlite3"
)

func main() {
	joyread.StartServer()
}
