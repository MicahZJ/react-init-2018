import React, {Component} from 'react'
import Style from './style.styl'
import {inject, observer} from "mobx-react/index"
import {withRouter} from "react-router-dom"
import { Carousel, WingBlank } from 'antd-mobile';

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
	      <WingBlank>
		      <Carousel className="space-carousel"
		                frameOverflow="visible"
		                cellSpacing={10}
		                slideWidth={0.8}
		                autoplay={false}
		                infinite
		                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
		                afterChange={index => this.store.setIndex(index)}
		      >
			      {this.store.data.map((val, index) => (
				      <a className={Style['aaa']}
					      key={val}
					      style={{
						      display: 'block',
						      position: 'relative',
						      top: this.store.slideIndex === index ? -10 : 0,
						      height: this.store.imgHeight,
						      boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
					      }}
				      >
					      <img
						      src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
						      alt=""
						      style={{ width: '100%', verticalAlign: 'top' }}
						      onLoad={() => {
							      // fire window resize event to change height
							      window.dispatchEvent(new Event('resize'));
							      this.store.setImageHeight();
						      }}
					      />
				      </a>
			      ))}
		      </Carousel>
	      </WingBlank>
    )
  }
}