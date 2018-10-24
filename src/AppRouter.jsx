import React, { Component } from 'react'
import asyncComponent from './component/asyncComponent'
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'
import hotNews from './pages/hot_news/index'
import todo from './pages/to_do/index'
import homePage from './pages/home_page/index'

// const todo = asyncComponent(() => import(/* webpackChunkName: "growCafe" */'./pages/to_do/index'));

export default class AppRoute extends Component {
  render() {
    return(<Router>
      <div>
        <ul>
          <li><Link to="/">主页</Link></li>
          <li><Link to="/hot">热门</Link></li>
	        <li><Link to="/todo">去干活</Link></li>
        </ul>
        <hr/>
	      <Route exact path="/" component={homePage}></Route>
        <Route exact path="/todo" component={todo}></Route>
        <Route exact path="/hot" component={hotNews} ></Route>
      </div>
    </Router>)
  }
}