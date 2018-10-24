import React from 'react';
import ReactDOM from 'react-dom';
import './index.styl';
// import TodoList from './TodoList'
// import TodoStore from './TodoStore'
import App from './App';
// import CommentApp from "./CommentApp";
// import CommentDemoApp from './CommentDemoApp'

import registerServiceWorker from './registerServiceWorker';
// const store = new TodoStore();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
