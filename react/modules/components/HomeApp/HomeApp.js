import React, { Component } from 'react';
import {Header} from '../Header/Header';
import {SideMenu} from '../SideMenu/SideMenu';
 
export class HomeApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="slds-grid">
          <nav role="nav" className="slds-col slds-size--2-of-12 siteNavi">
            <SideMenu />
          </nav>
          <main className="slds-col slds-size--10-of-12 siteMain">
            <Header title="Home" logo="home" />
            <div className="slds-p-around--small">
              Hello World!!
            </div>
          </main>
        </div>
      </div>
    );
  }
}