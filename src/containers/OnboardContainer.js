import { Container } from 'unstated';
import SetCookie from '../cookies/SetCookie';
import GetCookie from '../cookies/GetCookie';
import DeleteCookie from '../cookies/DeleteCookie';

class OnboardContainer extends Container {
  constructor () {
    super();

    var isTokenPresent = GetCookie("joyread") ? true : false;
    
    this.state = {
      isSignedUp: false, // pull info from backend if admin had already signed up
      isSignedIn: isTokenPresent
    };
  }

  signUp(url) {
    var name = document.getElementById('signUpName').value;
    var email = document.getElementById('signUpEmail').value;
    var password = document.getElementById('signUpPassword').value;
    var smtpServer = document.getElementById('signUpSMTPServer').value;
    var smtpPort = document.getElementById('signUpSMTPPort').value;
    var smtpEmail = document.getElementById('signUpSMTPEmail').value;
    var smtpPassword = document.getElementById('signUpSMTPPassword').value;

    var data = {
      name: name,
      email: email,
      password: password,
      smtp_server: smtpServer,
      smtp_port: smtpPort,
      smtp_email: smtpEmail,
      smtp_password: smtpPassword
    }

    fetch(url, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.status === "registered") {
        DeleteCookie("joyread");
        SetCookie("joyread", data.token, 30);
        
        this.setState({ isSignedUp: true });
      } else {
        alert('Not registered.');
      }
    });
  }
  
  signIn(url) {
    var email = document.getElementById('signInEmail').value;
    var password = document.getElementById('signInPassword').value;

    var data = {
      email: email,
      password: password
    }

    fetch(url, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.status === "authorized") {
        DeleteCookie("joyread");
        SetCookie("joyread", data.token, 30);

        this.setState({ isSignedIn: true });
      } else {
        alert('Your email address or password is incorrect.');
      }
    });
  }

  signOut() {
    DeleteCookie("joyread")
    this.setState({ isSignedIn: false });
  }
}

export default OnboardContainer;