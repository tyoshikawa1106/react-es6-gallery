import React, { Component } from 'react';
require('./BoardItem.scss');

export class BoardItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countNum: this.props.amount / 2,
      autoCountUpId: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.autoCountup = this.autoCountup.bind(this);
    this.autoCountupAction = this.autoCountupAction.bind(this);
  }

  componentDidMount(){
    this.autoCountup();
  }

  autoCountup(){
    var intervalId = setInterval(this.autoCountupAction, 1);
    this.setState({autoCountUpId: intervalId});
  }

  autoCountupAction(){
    if (this.state.countNum < this.props.amount) {
      this.setState({countNum: this.state.countNum + 1});
    } else {
      clearInterval(this.state.autoCountUpId);
    }
  }

  render(){
    return (
      <div className="board-item-component">
        <div className="slds-box">
          <div className="slds-tile slds-tile--board">
            <p className="slds-tile__title slds-truncate"><a href="javascript:void(0);">{this.props.opportunity}</a></p>
            <div className="slds-tile__detail">
              <p className="slds-text-heading--medium amount-label">${this.state.countNum}</p>
              <p className="slds-truncate"><a href="javascript:void(0);">{this.props.account}</a></p>
              <p className="slds-truncate slds-has-alert">{this.props.date}</p>
              <span className="slds-icon_container slds-tile--board__icon">
                <svg aria-hidden="true" className="slds-icon slds-icon-text-warning slds-icon--x-small">
                  <use xlinkHref="./vendor/salesforce-lightning-design-system/assets/icons/utility-sprite/svg/symbols.svg#warning"></use>
                </svg>
                <span className="slds-assistive-text">Warning Icon</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};