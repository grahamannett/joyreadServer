import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import OnboardRoute from './onboard/OnboardRoute';
import CurrentlyReading from './CurrentlyReading';
import OnboardContainer from './containers/OnboardContainer';

class Home extends Component {
  render() {
    return (
      <Subscribe to={[OnboardContainer]}>
        {onboard => (
          <div className="app__inner">
            {
              onboard.state.isSignedIn
              ? 
                <div>
                  <CurrentlyReading />
                </div>
              :
                <div>
                  <OnboardRoute />
                </div>
            }
          </div>
        )}
      </Subscribe>
    );
  }
}

export default Home;