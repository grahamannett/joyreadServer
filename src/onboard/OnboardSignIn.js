import React from 'react';
import { Subscribe } from 'unstated';
import { Redirect } from "react-router-dom";
import OnboardContainer from '../containers/OnboardContainer';

function OnboardSignIn(props) {
  return (
    <Subscribe to={[OnboardContainer]}>
      {onboard => (
        <div>
          {
            onboard.state.isSignedIn
            ?
              <Redirect to="/" />
            :
              onboard.state.isSignedUp
              ?
                <div className="onboard">
                  <label className="onboard__label">Sign In</label>
                  <input type="email" className="onboard__email" id="signInEmail" placeholder="Email address" />
                  <input type="password" className="onboard__password" id="signInPassword" placeholder="Password" />
                  <button className="button button-primary onboard__submit" onClick={() => onboard.signIn(props.signInAPI)}>Submit</button>
                </div>
              :
                <Redirect to="/signup" />
          }
        </div>
      )}
    </Subscribe>
  );
}

export default OnboardSignIn;