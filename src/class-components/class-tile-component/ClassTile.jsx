import React from 'react';
import './ClassTile.css';
import { Component } from 'react';

export class ClassTile extends Component {
  render() {
    return (
      <div className='class-tile'>
        <h3>This is created using class component</h3>
        <h4>This is done using external CSS</h4>
        <h5 style={{color: 'blue'}}>This is done using inline CSS</h5>
      </div>
    )
  }
}
