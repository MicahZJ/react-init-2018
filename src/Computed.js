import React, {Component} from 'react'
import ComputedInput from './ComputedInput'
import PercentageShower from './PercentageShower'

class Computed extends Component{
  constructor() {
    super()
    this.state={
      inputDate: 0
    }
  }

  handleInputChange(comment) {
    this.setState({
      inputDate: comment
    })
  }

  render() {
    return(
      <div>
        <ComputedInput onSubmit={this.handleInputChange.bind(this)} />
        <PercentageShower date={this.state.inputDate}/>
      </div>
    )
  }
}

export default Computed