package email

import (
	"runtime"

	"gopkg.in/gomail.v2"
)

// SendEmail ...
func SendEmail(from string, to string, subject string, body string, smtpServer string, smtpPort int, smtpEmail string, smtpPassword string) {
	// Set home many CPU cores this function wants to use
	runtime.GOMAXPROCS(runtime.NumCPU())

	m := gomail.NewMessage()
	m.SetHeader("From", from)
	m.SetHeader("To", to)
	m.SetHeader("Subject", subject)
	m.SetBody("text/html", body)

	d := gomail.NewDialer(smtpServer, smtpPort, smtpEmail, smtpPassword)

	// Send the email
	if err := d.DialAndSend(m); err != nil {
		panic(err)
	}
}
