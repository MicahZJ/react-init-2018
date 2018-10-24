import React, {Component} from 'react';
import Style from './style.styl'
import { observer, inject } from 'mobx-react';
import {withRouter} from "react-router-dom"
import Slider from 'react-slick'

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
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "40px",
      slidesToShow: 1,
      speed: 500,
      dots: true,
      arrows:false
    };
		return(
			<div>{this.store.a}
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <h3 style={{height: '200px',background: 'red'}}>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          {/*<div>*/}
          {/*<h3>4</h3>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*<h3>5</h3>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*<h3>6</h3>*/}
          {/*</div>*/}
        </Slider>
			</div>
		)
	}
}