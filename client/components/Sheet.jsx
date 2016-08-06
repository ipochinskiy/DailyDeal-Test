'use strict';

import React, { Component } from 'react';
import Emoji from './Emoji';

import { emojiMarkMap } from '../../libs/constants';

export default class Sheet extends Component {
  renderEmoji(type) {
    let currentMark = emojiMarkMap[type];
    return (
      <Emoji
        key={ currentMark }
        mood={ type }
        colored= { this.props.myMark >= currentMark }
        mark={ currentMark }
        selected={ this.props.myMark === currentMark }
        onRate={ this.props.makeOnRate(currentMark) }
      />
    );
  }
  render() {
    if (this.props.type === 'twisted') {
      return (<div className="sheet sheet-twisted"></div>);
    } else {
      let emojis = Object.keys(emojiMarkMap);
      return (
        <div className="sheet sheet-straight">
            <div className="sheet-heading">How did we do? Please rate your experience.</div>
            <div className="sheet-text">We’re always looking for ways to improve our customer experience.</div>
            <hr />

            <div className="flex-container emojis-bar">
              { emojis.map(renderEmoji) }
            </div>
        </div>
      );
    }
  }
}
