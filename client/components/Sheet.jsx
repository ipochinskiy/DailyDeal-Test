'use strict';

import React, { Component } from 'react';
import Emoji from './Emoji';

export default class Sheet extends Component {
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
                <Emoji type="awful" />
                <Emoji type="bad" />
                <Emoji type="neutral" />
                <Emoji type="good" />
                <Emoji type="amazing" />
              </div>
          </div>
        );
      }
  }
}
