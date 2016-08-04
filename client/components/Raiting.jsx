'use strict';

import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import Sheet from './Sheet';

export default class Raiting extends Component {
  componentWillMount() {
    let item = Meteor.call('getMyMark') || {};
    this.setState({ myMark: item.mark });
  }
  render() {
    return (
      <div className="flex-container">
        <Sheet type="twisted" />
        <Sheet type="straight" selected={ this.state.myMark }/>
      </div>
    );
  }
}
