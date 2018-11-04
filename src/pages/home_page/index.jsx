import React, {Component} from 'react'
import Style from './style.styl'
import {inject, observer} from "mobx-react/index"
import {withRouter} from "react-router-dom"

@inject('homePageStore')
@withRouter
@observer
export default class CommentHomePage extends Component {
	
	constructor(props) {
		super(props)
		this.store = this.props.homePageStore
	}
	
	componentWillMount() {
		document.title = 'just do it'
		this.store.getHomePageData()
		this.store._test()
	}
	
	componentWillUnmount() {
	}
	
	render() {
		return (
			<div id={'home-page-wrapper'}>
			
			</div>
		)
	}
}