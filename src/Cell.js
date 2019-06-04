import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: this.props.value
    }
  }
  changeColor = () => {
    const newColor = setState(
      color: #333
    )
  }

  render() {
    return (
      <div
       className="cell" >
       style={{backgroundColor: '#fff'}}
       onClick={changeColor()}
      </div>
    )
  }

}
