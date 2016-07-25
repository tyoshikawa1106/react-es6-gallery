import React, { Component } from 'react';
import {CounterItem} from '../CounterItem/CounterItem';

export class CounterBox extends Component {
  render(){
    return (
      <div className="counter-box-component">
        <table className="slds-table slds-table--bordered" cellPadding="0" cellSpacing="0">
          <colgroup>
            <col></col>
            <col width="50"></col>
          </colgroup>
          <tbody>
            <CounterItem />
            <CounterItem />
            <CounterItem />
            <CounterItem />
            <CounterItem />
            <CounterItem />
            <CounterItem />
            <CounterItem />
            <CounterItem />
            <CounterItem />
          </tbody>
        </table>
      </div>
    );
  }
};