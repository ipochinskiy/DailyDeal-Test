'use strict';

import React, { Component } from 'react';
import Sheet from './Sheet';

export default class Raiting extends Component {
  render() {
    return (
      <div className="flex-container">
        <Sheet type="twisted" />
        <Sheet type="straight" selected="good"/>
      </div>
    );
  }
}
