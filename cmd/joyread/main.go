package main

import (
	joyread "github.com/joyread/server"
	_ "github.com/lib/pq"
)

func main() {
	joyread.StartServer()
}
