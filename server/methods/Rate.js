import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Ratings } from '../../libs/collections/Ratings';

Meteor.methods({
  rate({ mark }) {
    if (typeof mark !== 'number') {
      throw new Meteor.Error(`Type mismatch, got: ${typeof mark}`);
    }

    Ratings.insert({
      mark,
      remoteAddress: this.connection.clientAddress,
      ratedAt: new Date()
    });
  },
  getMyMark() {
  	let ip = this.connection.clientAddress;
  	let res = Ratings.findOne({ remoteAddress: ip }, { sort: { 'ratedAt': -1 } }) || {};
  	return res.mark;
  }
});
