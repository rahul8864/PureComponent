import React, { Component } from 'react'

export class ClassComponent extends Component {
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
        <button onClick={() => this.setState({number: 10})}>Class Click</button>
      </div>
    )
  }
}

export default ClassComponent
