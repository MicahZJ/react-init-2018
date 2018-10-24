import React, {Component} from 'react'
import Style from './style.styl'
import {inject, observer} from "mobx-react/index"
import {withRouter} from "react-router-dom"

@inject('hotNewsStore')
@withRouter
@observer
export default class CommentXX extends Component {

  constructor(props) {
    super(props)
    this.store = this.props.hotNewsStore
  }

  toPages() {
    this.props.history.push('/todo')
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>2
        <span onClick={this.toPages.bind(this)}>去todo</span>
      </div>
    )
  }
}