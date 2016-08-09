import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';

import Checkmark from './Checkmark';

import { mouthClassNameMap } from '../../libs/constants';

const getMouthClassNames = (mood, colored) => {
  let fn = mouthClassNameMap[mood];
  return fn ? fn(colored) : [];
}

const getEmojiClassNames = colored => {
  return !!colored
    ? [ 'emoji', 'zoom', 'emoji-colored' ]
    : [ 'emoji', 'zoom', 'emoji-inactive' ];
}

export default class Emoji extends Component {
    render() {
      let emojisClassNames = getEmojiClassNames(this.props.colored).join(' ');
      let mouthClassNames = getMouthClassNames(this.props.mood, this.props.colored).join(' ');
      return (
        <div className={ emojisClassNames } onClick={ this.props.onRate }>
          <div className={ mouthClassNames } ></div>
          { this.props.selected ? <Checkmark active={ this.props.selected } /> : null }
        </div>
      );
    }
}
