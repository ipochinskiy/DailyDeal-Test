'use strict';

import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';

import { mouthClassNameMap } from '../../libs/constants';

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
      let emojisClassNames = getEmojiClassNames(this.props.colored).join(' ');
      let mouthClassNames = getMouthClassNames(this.props.mood, this.props.colored).join(' ');
      return (
        <div className={ emojisClassNames } onClick={ this.props.onRate }>
          <div className={ mouthClassNames } ></div>
          { this.renderCheck() }
        </div>
      );
    }
}
