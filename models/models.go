package models

import (
	"database/sql"

	// custom packages
	cError "github.com/joyread/server/error"
)

// CreateUser ...
func CreateUser(db *sql.DB) {
	stmt, err := db.Prepare("CREATE TABLE IF NOT EXISTS `user` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `username` VARCHAR(255) UNIQUE NOT NULL, `email` VARCHAR(255) UNIQUE NOT NULL, `password_hash` VARCHAR(255) NOT NULL, `jwt_token` VARCHAR(255) NOT NULL)")
	cError.CheckError(err)

	_, err = stmt.Exec()
	cError.CheckError(err)
}

// InsertUser ...
func InsertUser(db *sql.DB, username string, email string, passwordHash string, tokenString string) {
	stmt, err := db.Prepare("INSERT INTO `user` (username, email, password_hash, jwt_token) VALUES (?, ?, ?, ?)")
	cError.CheckError(err)

	_, err = stmt.Exec(username, email, passwordHash, tokenString)
	cError.CheckError(err)
}

// SelectPasswordHashAndJWTToken ...
func SelectPasswordHashAndJWTToken(db *sql.DB, usernameoremail string) (string, string) {
	// Search for username in the 'user' table with the given string
	rows, err := db.Query("SELECT `password_hash`, `jwt_token` FROM `user` WHERE `username` = ?", usernameoremail)
	cError.CheckError(err)

	var (
		passwordHash string
		tokenString  string
	)

	if rows.Next() {
		err := rows.Scan(&passwordHash, &tokenString)
		cError.CheckError(err)
	} else {
		// if username doesn't exist, search for email in the 'user' table with the given string
		rows, err := db.Query("SELECT `password_hash`, `jwt_token` FROM `user` WHERE `email` = ?", usernameoremail)
		cError.CheckError(err)

		if rows.Next() {
			err := rows.Scan(&passwordHash, &tokenString)
			cError.CheckError(err)
		}
		rows.Close()
	}
	rows.Close()

	return passwordHash, tokenString
}

// CreateSMTP ...
func CreateSMTP(db *sql.DB) {
	stmt, err := db.Prepare("CREATE TABLE IF NOT EXISTS `smtp` (`server` VARCHAR(255) NOT NULL, `port` INTEGER NOT NULL, `email` VARCHAR(255) NOT NULL, `password` VARCHAR(255) NOT NULL)")
	cError.CheckError(err)

	_, err = stmt.Exec()
	cError.CheckError(err)
}

// InsertSMTP ...
func InsertSMTP(db *sql.DB, server string, port int, email string, password string) {
	stmt, err := db.Prepare("INSERT INTO `smtp` (server, port, email, password) VALUES (?, ?, ?, ?)")
	cError.CheckError(err)

	_, err = stmt.Exec(server, port, email, password)
	cError.CheckError(err)
}
