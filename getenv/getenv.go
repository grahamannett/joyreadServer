package getenv

import "os"

// GetEnv gets key(which is an env variable, eg: JOYREAD_PORT)
// and fallback string in case if there is no env variable found
func GetEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}
