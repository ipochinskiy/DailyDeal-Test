'use strict';

import React, {Component} from 'react';

export default class Emoji extends Component {
    rate(type) {
      Meteor.call('rate', type);
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
          <div className="emoji" onClick={ this.rate.bind(this, this.props.type) }>
            <div className={ this.props.type } ></div>
            { this.renderCheck() }
          </div>
        );
    }
}
