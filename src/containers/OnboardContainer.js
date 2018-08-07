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

  signUp(event, url) {
    event.preventDefault();

    var username = document.getElementById('signUpUsername').value;
    var email = document.getElementById('signUpEmail').value;
    var password = document.getElementById('signUpPassword').value;

    // Check for '@' in the username
    var pattern = /^[\w&.-]+$/
    if (!pattern.test(username)) {
      alert('Invalid username - Special characters allowed are \'&\', \'.\', \'-\' ');
      return false;
    }

    var data = {
      username: username,
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
      if (data.status === 'registered') {
        DeleteCookie('joyread');
        SetCookie('joyread', data.token, 30);
        
        this.setState({ isSignedUp: true });
      } else {
        alert('Not registered.');
      }
    });
  }
  
  signIn(event, url) {
    event.preventDefault();
    var usernameoremail = document.getElementById('signInUsernameOrEmail').value;
    var password = document.getElementById('signInPassword').value;

    var data = {
      usernameoremail: usernameoremail,
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
      if (data.status === 'authorized') {
        DeleteCookie('joyread');
        SetCookie('joyread', data.token, 30);

        this.setState({ isSignedIn: true });
      } else {
        alert('Your email address or password is incorrect.');
      }
    });
  }

  signOut() {
    DeleteCookie('joyread')
    this.setState({ isSignedIn: false });
  }
}

export default OnboardContainer;