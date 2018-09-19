import React, {Component} from 'react'

class ComputedInput extends Component{
  constructor() {
    super()
    this.state = {
      inputDate: 0
    }
  }

  handleInput(event) {
    this.setState({
      inputDate: event.target.value
    })
  }

  onConversion() {
    if(this.props.onSubmit) {
      this.props.onSubmit(this.state.inputDate)
    }
  }

  render() {
    return(
      <div>
        输入：<input type={'number'} value={this.state.inputDate} onChange={this.handleInput.bind(this)}/>
        <button onClick={this.onConversion.bind(this)}>转换</button>
      </div>
    )
  }
}

export default ComputedInput