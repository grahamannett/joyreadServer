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

    var isError = false;
    var onboardErrors = document.getElementsByClassName('onboard__error');
    for (var i = 0; i < onboardErrors.length; i++) {
      onboardErrors[i].classList.remove('onboard__error--active');
    }

    // Check for valid username
    var usernamePattern = /^[\w&.-]+$/;
    if (!usernamePattern.test(username)) {
      isError = true;
      document.getElementById('signUpUsernameError').innerText = 'Invalid username - Special characters allowed are \'&\', \'.\', \'-\' ';
      document.getElementById('signUpUsernameError').classList.add('onboard__error--active');
    }

    // Check if username value is none
    if (username === '') {
      isError = true;
      document.getElementById('signUpUsernameError').innerText = 'This field is required';
      document.getElementById('signUpUsernameError').classList.add('onboard__error--active');
    }

    // Check for valid email
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailPattern.test(email)) {
      isError = true;
      document.getElementById('signUpEmailError').innerText = 'Invalid email address';
      document.getElementById('signUpEmailError').classList.add('onboard__error--active');
    }

    // Check if email value is none
    if (email === '') {
      isError = true;
      document.getElementById('signUpEmailError').innerText = 'This field is required';
      document.getElementById('signUpEmailError').classList.add('onboard__error--active');
    }

    // Check if password value is none
    if (password === '') {
      isError = true;
      document.getElementById('signUpPasswordError').innerText = 'This field is required';
      document.getElementById('signUpPasswordError').classList.add('onboard__error--active');
    }

    // Return false if any of the above errors exists
    if (isError) {
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
        
        this.setState({ isSignedUp: true, isSignedIn: true });
        document.getElementById('alert').innerHTML = '<i></i><p>Your account is successfully registered</p>';
        document.getElementById('alert').classList.add('alert--success');
      } else {
        document.getElementById('alert').innerText = 'Not registered';
        document.getElementById('alert').classList.add('alert--error');
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