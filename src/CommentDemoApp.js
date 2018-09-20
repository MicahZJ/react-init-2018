import React, {Component} from 'react'

class CommentDemoApp extends Component{
  constructor() {
    super()
    this.state = {
      postData: [],
      style:''
    }
  }

  clearData() {
    this.setState({
      postData: []
    })
  }

  async postData() {
    let res = await this.getPostData()
    console.log('刷新了哦', res, 'div高度', this.style.clientHeight)
    this.setState({
      postData:res
    })
  }

  getPostData() {
    return new Promise((resolve, reject) => {
      let arr = [
        {title: '标题', content: '第一条数据'},
        {title: '标题', content: '第二条数据'},
        {title: '标题', content: '第三条数据'},
        {title: '标题', content: '第四条数据'}
        ]

      resolve(arr)
    })
  }

  render() {
    return(
      <div className={'demo-box'}>
        <div className={'post-content'} ref={(style) => this.style = style}>
          {this.state.postData.map((item, index) => {
            return(
              <li key={index}>
                <span>{item.title}</span>
                <span>{item.content}</span>
              </li>
              )
          })}
        </div>
        <button onClick={this.postData.bind(this)}>刷新一下</button>
        <button onClick={this.clearData.bind(this)}>清空数据</button>
      </div>
    )
  }
}

export default CommentDemoApp