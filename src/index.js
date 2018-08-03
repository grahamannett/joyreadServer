import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();