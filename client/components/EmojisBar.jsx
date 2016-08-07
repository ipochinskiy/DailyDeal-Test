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
          let colored = this.props.myMark >= currentMark;
          let selected = this.props.myMark === currentMark;
          let onRateHandle = selected
            ? () => {}
            : this.props.makeOnRate(currentMark);

          return (
            <Emoji
              key={ currentMark }
              mood={ type }
              colored={ colored }
              mark={ currentMark }
              selected={ selected }
              onRate={ onRateHandle }
            />
          );
        }) }
      </div>
    );
  }
}
