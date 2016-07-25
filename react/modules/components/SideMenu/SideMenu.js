import React, { Component } from 'react';
require('./SideMenu.scss');

export class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu-component">
        <div className="sideMenu">
          <ul className="slds-list--vertical slds-has-dividers">
            <li className="slds-list__item nav-list"><a href="/">Home</a></li>
            <li className="slds-list__item nav-list"><a href="/todo">Todo</a></li>
            <li className="slds-list__item nav-list"><a href="/comment">Comment</a></li>
            <li className="slds-list__item nav-list"><a href="/board">Board</a></li>
          </ul>
        </div>
      </div>
    )
  }
};