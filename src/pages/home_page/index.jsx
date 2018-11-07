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
		this.store._getBiliBili()
	}
	
	componentWillUnmount() {
	}
	
	render() {
		return (
			<div id={'home-page-wrapper'}>
				<div className={'page-content'}>
					{this.store.menuArr.map((val, index) => (
						<li className={'li-class'} key={index}>{val.title}</li>
						))}
				</div>
			</div>
		)
	}
}