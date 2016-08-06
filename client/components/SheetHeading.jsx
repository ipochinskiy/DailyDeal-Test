'use strict';

import React, { Component } from 'react';

export default class SheetHeading extends Component {
  render() {
    return (
      <div>
        <div className="sheet-heading">How did we do? Please rate your experience.</div>
        <div className="sheet-text">We’re always looking for ways to improve our customer experience.</div>
        <hr />
      </div>
    );
  }
}
