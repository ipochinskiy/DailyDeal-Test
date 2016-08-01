import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Ratings } from '../../libs/collections/Ratings';

Meteor.methods({
  rate(type) {
    check(type, String);

    Ratings.insert({
      type,
      ratedAt: new Date()
    });
  }
});
