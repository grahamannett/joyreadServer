import React from 'react';
import { Subscribe } from 'unstated';
import { Redirect } from "react-router-dom";
import OnboardContainer from '../containers/OnboardContainer';

function OnboardSignUp(props) {
  return (
    <Subscribe to={[OnboardContainer]}>
      {onboard => (
        <div>
          {
            onboard.state.isSignedUp
            ?
              <Redirect to="/signin" />
            :
              <form className="onboard">
                <label className="onboard__label">Sign Up</label>
                <input type="text" className="onboard__username" id="signUpUsername" placeholder="Username (johnwell)*" />
                <input type="email" className="onboard__email" id="signUpEmail" placeholder="Email address (info@example.com)*" />
                <input type="password" className="onboard__password" id="signUpPassword" placeholder="Password*" />
                <input type="submit" className="button button-primary onboard__submit" value="Submit" onClick={(event) => onboard.signUp(event, props.signUpAPI)} />
              </form>
          }
        </div>
      )}
    </Subscribe>
  );
}

export default OnboardSignUp;