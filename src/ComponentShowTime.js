import React, {Component} from 'react'

class ComponentShowTime extends Component{
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return(
      <div>
        <span>现在的时间是：</span>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

export default ComponentShowTime