import React, {Component} from 'react'
import Style from './style.styl'
import {Link} from 'react-router-dom'
import {inject, observer} from "mobx-react/index"
import {withRouter} from "react-router-dom"

@inject('menuStore')
@withRouter
@observer
export default class CommentHomePage extends Component {
	
	constructor(props) {
		super(props)
		this.store = this.props.menuStore
	}
	
	componentWillMount() {
		document.title = 'just do it'
		this.store.getHomePageData()
		this.store._getBiliBili()
	}
	
	componentWillUnmount() {
	}
	
	render() {
		return(
			<div className={'nav-menu'}>
				<div className={'blur-bg'}></div>
				<div className="nav-mask"></div>
				<ul className={'menu-list'}>
					<li><Link to="/">主页</Link></li>
					<li><Link to="/hot">热门</Link></li>
					<li><Link to="/todo">去干活</Link></li>
				</ul>
			</div>
		)
	}
}