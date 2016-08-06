'use strict';

import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';

const mouthClassNameMap = {
  'awful': colored => {
    return !!colored
      ? [ 'awful', 'mouth-opened-colored' ]
      : [ 'awful', 'mouth-opened-inactive' ];
  },
  'good': colored => {
    return !!colored
      ? [ 'good', 'good-colored' ]
      : [ 'good', 'good-inactive' ];
  },
  'neutral': colored => {
    return !!colored
      ? [ 'neutral', 'neutral-colored' ]
      : [ 'neutral', 'neutral-inactive' ];
  },
  'bad': colored => {
    return !!colored
      ? [ 'bad', 'bad-colored' ]
      : [ 'bad', 'bad-inactive' ];
  },
  'amazing': colored => {
    return !!colored
      ? [ 'amazing', 'mouth-opened-colored' ]
      : [ 'amazing', 'mouth-opened-inactive' ];
  }
}

const getMouthClassNames = (mood, colored) => {
  let fn = mouthClassNameMap[mood];
  return fn ? fn(colored) : [];
}

const getEmojiClassNames = colored => {
  return !!colored
    ? [ 'emoji', 'emoji-colored' ]
    : [ 'emoji', 'emoji-inactive' ];
}

export default class Emoji extends Component {
    rate(mark) {
      Meteor.call('rate', mark);
    }
    renderCheck() {
      if (this.props.selected) {
        return (
          <span className="checkmark">
            <div className="checkmark_circle"></div>
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
          </span>
        );
      }
    }
    render() {
      var emojisClassNames = getEmojiClassNames(this.props.colored).join(' ');
      var mouthClassNames = getMouthClassNames(this.props.mood, this.props.colored).join(' ');
      return (
        <div className={ emojisClassNames } onClick={ () => this.rate(this.props.mark) }>
          <div className={ mouthClassNames } ></div>
          { this.renderCheck() }
        </div>
      );
    }
}
