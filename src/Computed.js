import React, {Component} from 'react'
import ComputedInput from './ComputedInput'
import PercentageShower from './PercentageShower'

class Computed extends Component{
  constructor() {
    super()
    this.state={
      inputDate: ''
    }
  }

  handleInputChange() {

  }

  render() {
    return(
      <div>
        <ComputedInput onSubmit={this.handleInputChange.bind(this)} />
        <PercentageShower />
      </div>
    )
  }
}

export default Computed