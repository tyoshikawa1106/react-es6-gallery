import React, { Component } from 'react';
import {Header} from '../Header/Header';
import {SideMenu} from '../SideMenu/SideMenu';
import {BoardBox} from '../BoardBox/BoardBox';

export class BoardApp extends Component {
  render() {
    return (
      <div className="counter-app-component">
        <div className="slds-grid">
          <nav role="nav" className="slds-col slds-size--2-of-12 siteNavi">
            <SideMenu />
          </nav>
          <main className="slds-col slds-size--10-of-12 siteMain">
            <Header title="Board" logo="opportunity" />
            <div className="slds-m-around--small">
              <BoardBox />
            </div>
          </main>
        </div>
      </div>
    )
  }
};