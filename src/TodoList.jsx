import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class AddTodo extends Component {
	constructor (props) {
		super(props)
		this.store = this.props.store
	}
	render() {
		return(
			<div>{this.store.a}</div>
		)
	}
}