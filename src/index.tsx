import React from 'react';
import ReactDOM from 'react-dom';

// Import PF4 for entire app.
import '@patternfly/react-core/dist/styles/base.css';

import { DemoAWSForm } from './DemoAWSForm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<DemoAWSForm />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
