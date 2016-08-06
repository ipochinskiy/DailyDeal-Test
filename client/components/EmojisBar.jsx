'use strict';

import React, { Component } from 'react';

import Emoji from './Emoji';

import { emojiMarkMap } from '../../libs/constants';

export default class EmojisBar extends Component {
  render() {
    let emojis = Object.keys(emojiMarkMap);
    return (
      <div className="flex-container emojis-bar">
        { emojis.map(type => {
          let currentMark = emojiMarkMap[type];
          return (
            <Emoji
              key={ currentMark }
              mood={ type }
              colored={ this.props.myMark >= currentMark }
              mark={ currentMark }
              selected={ this.props.myMark === currentMark }
              onRate={ this.props.makeOnRate(currentMark) }
            />
          );
        }) }
      </div>
    );
  }
}
