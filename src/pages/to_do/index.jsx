import React, {Component} from 'react';
import Style from './style.styl'
import { observer, inject } from 'mobx-react';
import {withRouter} from "react-router-dom"

@withRouter
@inject('todoStore')
@observer
export default class AddTodo extends Component {
	constructor (props) {
		super(props)
		this.store = this.props.todoStore
	}

  componentWillMount() {
		document.title = 'just do it'
  }

  componentWillUnmount() {
  }

	render() {
		return(
			<div>{this.store.a}</div>
		)
	}
}