'use strict';

import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';

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
        return (
          <div className="emoji" onClick={ () => this.rate(this.props.mark) }>
            <div className={ this.props.type } ></div>
            { this.renderCheck() }
          </div>
        );
    }
}
