'use strict';

import React, {Component} from 'react';

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
    },
    render() {
      let selected = this.props.selected
        return (
          <div className="emoji">
            <div className={this.props.type} ></div>
            { this.renderCheck() }
          </div>
        );
    }
}
