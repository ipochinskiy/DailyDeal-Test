'use strict';

import React, { Component } from 'react';
import Emoji from './Emoji';

const emojis = [
  'awful', 'bad', 'neutral', 'good', 'amazing'
];

export default class Sheet extends Component {
  rate() {
    
  }
  render() {
      if (this.props.type === 'twisted') {
        return (<div className="sheet sheet-twisted"></div>);
      } else {
        return (
          <div className="sheet sheet-straight">
              <div className="sheet-heading">How did we do? Please rate your experience.</div>
              <div className="sheet-text">We’re always looking for ways to improve our customer experience.</div>
              <hr />

              <div className="emojis-bar">
                { emojis.map(type =>
                    <Emoji
                      key={ type }
                      type={ type }
                      selected={ this.props.selected === type }
                      onClick={ this.rate }
                    />
                ) }
              </div>
          </div>
        );
      }
  }
}
