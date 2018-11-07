import React from 'react';
import ReactDOM from 'react-dom';
import './index.styl';
import App from './App';
import './libs/flexible.min'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
