import { Ratings } from '../../libs/collections/Ratings';

Meteor.publish('rating', () => Ratings.find({}, [ 'ratedAt' ]));
