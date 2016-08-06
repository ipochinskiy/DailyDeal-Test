'use strict';

import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import EmojisBar from './EmojisBar';
import Sheet from './Sheet';
import SheetHeading from './SheetHeading';

export default class Raiting extends Component {
  componentWillMount() {
    let mark = Meteor.call('getMyMark');
    console.log(Date.now(), 'mark:', mark);
    this.setState({ myMark: mark });
  }
  makeOnRate(mark) {
    return () => {
      Meteor.call('rate', mark);
      this.setState({ myMark: mark });
    }
  }
  render() {
    return (
      <div className="flex-container">
        <Sheet type="twisted" />
        <Sheet type="straight" >
          <SheetHeading />
          <EmojisBar
            myMark={ this.state.myMark }
            makeOnRate={ this.makeOnRate.bind(this) }
          />
        </Sheet>
      </div>
    );
  }
}
