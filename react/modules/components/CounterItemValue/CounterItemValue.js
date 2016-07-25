import React, { Component } from 'react';

export class CounterItemValue extends Component {

  render(){
    return (
      <div className="counter-item-value-component">
        <span className="slds-text-heading--large">$ {this.props.countNum}</span>
      </div>
    );
  }
};