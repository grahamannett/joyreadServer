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
              <div className="onboard">
                <label className="onboard__label">Sign Up</label>
                <input type="text" className="onboard__name" id="signUpName" placeholder="Full name (John Well)*" />
                <input type="email" className="onboard__email" id="signUpEmail" placeholder="Email address (info@example.com)*" />
                <input type="password" className="onboard__password" id="signUpPassword" placeholder="Password*" />
                <input type="text" className="onboard__smtp-server" id="signUpSMTPServer" placeholder="SMTP server (smtp.fastmail.com)*" />
                <input type="text" className="onboard__smtp-port" id="signUpSMTPPort" placeholder="SMTP port (587/465)*" />
                <input type="email" className="onboard__smtp-email" id="signUpSMTPEmail" placeholder="SMTP email address (info@example.com)*" />
                <input type="password" className="onboard__smtp-password" id="signUpSMTPPassword" placeholder="SMTP password*" />
                <button className="button button-primary onboard__submit" onClick={() => onboard.signUp(props.signUpAPI)}>Submit</button>
              </div>
          }
        </div>
      )}
    </Subscribe>
  );
}

export default OnboardSignUp;