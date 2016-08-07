'use strict';

import React, { Component } from 'react';

export default class SheetHeading extends Component {
  renderInitial() {
    return (
      <div>
        <div className="sheet-heading">How did we do? Please rate your experience.</div>
        <div className="sheet-text">We’re always looking for ways to improve our customer experience.</div>
        <hr />
      </div>
    );
  }

  renderThanks() {
    return (
      <div>
        <div className="sheet-heading">Thank you.</div>
        <hr />
      </div>
    );
  }

  render() {
  	if (this.props.type === 'initial') {
  		return this.renderInitial();
  	} else if (this.props.type === 'thanks') {
  		return this.renderThanks();
  	}
  }
}
