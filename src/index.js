import React from 'react';
import ReactDOM from 'react-dom';
import './index.styl';
// import App from './App';
// import CommentApp from "./CommentApp";
import CommentDemoApp from './CommentDemoApp'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CommentDemoApp />, document.getElementById('root'));
registerServiceWorker();
