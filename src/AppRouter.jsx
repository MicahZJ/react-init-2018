import React, { Component } from 'react'
import asyncComponent from './component/asyncComponent'
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'

import HotNews from './pages/hot_news/index'
import ToDo from './pages/to_do/index'
import HomePage from './pages/home_page/index'
import Menu from './pages/menu/index'

import webconfig from './webConfig'
const publicpath = webconfig.publicPath
// const todo = asyncComponent(() => import(/* webpackChunkName: "growCafe" */'./pages/to_do/index'));

export default class AppRoute extends Component {
  render() {
    return(<Router>
      <div>
        <Menu />
        {/* <Route exact path={`${publicpath}/`} component={homePage} ></Route> */}
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/todo" component={ToDo}></Route>
        <Route exact path="/hot" component={HotNews} ></Route>
      </div>
    </Router>)
  }
}