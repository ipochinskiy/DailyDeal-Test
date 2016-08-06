'use strict';

import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import EmojisBar from './EmojisBar';
import Sheet from './Sheet';
import SheetHeading from './SheetHeading';

const makeOnRate = mark => () => Meteor.call('rate', { mark }, (err, res) => {
  if (!err) {
    this.setState({ myMark: mark });
    console.log(this.state);
  }
});

export default class Raiting extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    Meteor.call('getMyMark', (err, mark) => {
      if (!err) {
        this.state = { myMark: mark }
      }
    });
  }
  
  render() {
    return (
      <div className="flex-container">
        <Sheet type="twisted" />
        <Sheet type="straight" >
          <SheetHeading />
          <EmojisBar
            myMark={ this.state.myMark }
            makeOnRate={ makeOnRate.bind(this) }
          />
        </Sheet>
      </div>
    );
  }
}
