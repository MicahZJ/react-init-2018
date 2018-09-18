import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  handleSubmitComment(commit) {
    console.log(commit)
    this.state.comments.push(commit)
    this.setState({
      comments: this.state.comments
    })
  }

  render() {
    return(
      <div className={'wrapper'}>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
      )
  }
}

export default CommentApp