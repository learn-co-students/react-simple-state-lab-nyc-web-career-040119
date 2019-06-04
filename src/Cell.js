import React, { Component } from 'react';

class Cell extends Component {

  constructor(props) {
    console.log(props)
      super(props)
      this.state = {
        color: props.value
      }
    }

  render() {
    return(
      <div className='cell'
        style={{backgroundColor: this.state.color}}
        onClick={() =>{
          console.log('clicked')
          this.setState({color:'#333'})
        }}>
      </div>
    )
  }
}

export default Cell
