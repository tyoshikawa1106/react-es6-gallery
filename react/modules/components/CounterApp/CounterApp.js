import React, { Component } from 'react';
import {Header} from '../Header/Header';
import {SideMenu} from '../SideMenu/SideMenu';
import {CounterBox} from '../CounterBox/CounterBox';

export class CounterApp extends Component {
  render() {
    return (
      <div className="counter-app-component">
        <div className="slds-grid">
          <nav role="nav" className="slds-col slds-size--2-of-12 siteNavi">
            <SideMenu />
          </nav>
          <main className="slds-col slds-size--10-of-12 siteMain">
            <Header title="Counter" logo="opportunity" />
            <div className="slds-m-around--small">
              <CounterBox />
            </div>
          </main>
        </div>
      </div>
    )
  }
};