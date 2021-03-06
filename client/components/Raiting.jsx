import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import React, { Component } from 'react';

import EmojisBar from './EmojisBar';
import Sheet from './Sheet';
import SheetHeading from './SheetHeading';

import { Ratings } from '../../libs/collections/Ratings';

const getAverageRating = () => {
  let items = Ratings.find({}).map(item => item.mark);
  if (items.length === 0) { return 0; }

  let sum = items.reduce((memo, current) => memo + current, 0);
  return sum / items.length;
}

export default class Raiting extends Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0 };

    Meteor.call('getMyMark', (err, mark) => {
      if (!err) {
        this.state = { myMark: mark, rating: 0 }
      }
    });

    Tracker.autorun(function(){
      Meteor.subscribe('rating');
    });
  }

  componenWillUnmount() {
    Meteor.unsubscribe('rating');
  }

  makeRateHandler(mark) {
    return () => Meteor.call('rate', { mark }, (err, res) => {
      if (res) {
        let average = getAverageRating();
        this.setState({ myMark: mark, rating: average });
      }
    });
  }
  
  render() {
    return (
      <div className="flex-container">
        <Sheet type="twisted" />
        <Sheet type="straight" >
          <SheetHeading type={ this.state.myMark === undefined ? 'initial' : 'thanks' } />
          <EmojisBar
            myMark={ this.state.myMark }
            rating={ this.state.rating }
            makeRateHandler={ this.makeRateHandler.bind(this) }
          />
        </Sheet>
      </div>
    );
  }
}
