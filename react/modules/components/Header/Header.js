import React, { Component } from 'react';
require('./Header.scss');

export class Header extends Component {

  constructor(props) {
    super(props);
  }

  toHome() {
    location.href="/";
    return false;
  }

  render() {
    // Path
    var sldsPath = './vendor/salesforce-lightning-design-system';
    var headerLogoPath = `${sldsPath}/assets/icons/standard-sprite/svg/symbols.svg#${this.props.logo}`;
    // ClassName 
    var headerIconClass = `slds-icon slds-icon-standard-${this.props.logo}`;

    return (
      <div className="header-component">
        <div className="slds-page-header pageHeader" role="banner">
          <div className="slds-media slds-media--center">
            <div className="slds-media__figure">
              <svg aria-hidden="true" className={headerIconClass}>
                <use xlinkHref={headerLogoPath}></use>
              </svg>
            </div>
            <div className="slds-media__body">
              <p className="slds-page-header__title slds-truncate slds-align-middle" title="{this.props.title}">{this.props.title}</p>
              <p className="slds-text-body--small page-header__info" onClick={this.toHome}>- T.Yoshikawa Labs -</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};