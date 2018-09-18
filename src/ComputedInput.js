import React, {Component} from 'react'

class ComputedInput extends Component{
  constructor() {
    super()
    this.state = {
      inputDate: ''
    }
  }

  handleInput(event) {
    this.setState({
      inputDate: event.target.value
    })
  }

  render() {
    return(
      <div>
        输入：<input value={this.state.inputDate} onChange={this.handleInput.bind(this)}/>
      </div>
    )
  }
}

export default ComputedInput