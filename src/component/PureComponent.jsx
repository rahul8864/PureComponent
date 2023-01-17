import React, { PureComponent } from 'react'

export class PureComponents extends PureComponent {

constructor() {
        super()
        this.state = {
            number:10
        }
    }
  render() {
    console.log(this.state.number)
    return (
      <div>
        <button onClick={() => this.setState({number: 10})}>Pure Click</button>
      </div>
    )
  }
}

export default PureComponents