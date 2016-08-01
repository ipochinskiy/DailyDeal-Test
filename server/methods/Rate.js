import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

import { Ratings } from '../../libs/collections/Ratings';

Meteor.methods({
  rate(type) {
    if (typeof type !== 'string') {
      throw new Meteor.Error(`Type mismatch, got: ${typeof type}`);
    }
    console.log('!');

    Ratings.insert({
      type,
      ratedAt: new Date()
    });
    
  }
});
