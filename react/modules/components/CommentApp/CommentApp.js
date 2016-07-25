import React, { Component } from 'react';
import {Header} from '../Header/Header';
import {SideMenu} from '../SideMenu/SideMenu';
import {CommentBox} from '../CommentBox/CommentBox';

export class CommentApp extends Component {
  render() {
    return (
      <div className="descusion-app-component">
        <div className="slds-grid">
          <nav role="nav" className="slds-col slds-size--2-of-12 siteNavi">
            <SideMenu />
          </nav>
          <main className="slds-col slds-size--10-of-12 siteMain">
            <Header title="Comment" logo="feedback" />
            <div className="slds-m-around--small">
              <CommentBox url="/api/comments" pollInterval={100000} />
            </div>
          </main>
        </div>
      </div>
    )
  }
}