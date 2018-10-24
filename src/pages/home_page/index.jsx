import React, {Component} from 'react'
import Style from './style.styl'
import {inject, observer} from "mobx-react/index"
import {withRouter} from "react-router-dom"

@inject('homePageStore')
@withRouter
@observer
export default class CommentXX extends Component {
	
	constructor(props) {
		super(props)
		this.store = this.props.homePageStore
	}
	
	componentWillMount() {
	}
	
	componentWillUnmount() {
	}
	
	render() {
		return (
			<div>123</div>
		)
	}
}