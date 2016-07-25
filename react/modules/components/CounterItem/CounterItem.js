import React, { Component } from 'react';
import {CounterItemValue} from '../CounterItemValue/CounterItemValue';
import {CounterItemMenu} from '../CounterItemMenu/CounterItemMenu';

export class CounterItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countNum: 0,
      maxCountNum: 1000,
      autoCountUpId: null
    };
    this.countup = this.countup.bind(this);
    this.countdown = this.countdown.bind(this);
    this.autoCountup = this.autoCountup.bind(this);
    this.autoCountupAction = this.autoCountupAction.bind(this);
  }

  countup() {
    if (this.state.countNum < this.state.maxCountNum) {
      this.setState({countNum: this.state.countNum + 1});
    }
  }
  
  countdown() {
    this.setState({countNum: this.state.countNum - 1});
  }

  autoCountup() {
    var intervalId = setInterval(this.autoCountupAction, 1);
    this.setState({autoCountUpId: intervalId});
  }

  autoCountupAction() {
    if (this.state.countNum < this.state.maxCountNum) {
      this.setState({countNum: this.state.countNum + 1});
    } else {
      clearInterval(this.state.autoCountUpId);
    }
  }

  render(){
    return (
      <tr className="counter-item-component">
        <td>
          <CounterItemValue countNum={this.state.countNum} />
        </td>
        <td>
          <CounterItemMenu countup={this.countup} countdown={this.countdown} autoCountup={this.autoCountup} />
        </td>
      </tr>
    );
  }
};