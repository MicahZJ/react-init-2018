import React, {Component} from 'react'

class PercentageShower extends Component{
  render() {
    let num = this.props.date * 100
    return(
      <div>{num.toFixed(2)+'%'}</div>
    )
  }
}

export default PercentageShower