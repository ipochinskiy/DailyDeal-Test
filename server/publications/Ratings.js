'use strict';

import { Meteor } from 'meteor/meteor';

import { Ratings } from '../../libs/collections/Ratings';

Meteor.publish('rating', function() {
  return Ratings.find({}, {
    sort: { 'ratedAt': 1 },
    fields: { remoteAddress: 0 }
  });
});
