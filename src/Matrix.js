import React, { Component } from 'react';
import Cell from './Cell.js';
import data from './data.js';

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />)
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    console.log(data.pattern1)
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: data.pattern1
}
