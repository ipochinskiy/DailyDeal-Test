'use strict';

import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import Sheet from './Sheet';
import { Ratings } from '../../libs/collections/Ratings';

export default class Raiting extends Component {
  componentDidMount() {
    Meteor.subscribe('rating');
  }
  comonentWillUnmount() {
    Meteor.unsubscribe('rating');
  }
  render() {
    return (
      <div className="flex-container">
        <Sheet type="twisted" />
        <Sheet type="straight" selected="good"/>
      </div>
    );
  }
}
