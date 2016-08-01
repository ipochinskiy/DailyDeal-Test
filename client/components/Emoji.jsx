'use strict';

import React, {Component} from 'react';

export default class Emoji extends Component {
    render() {

        return (
          <div className="emoji">
            <div className={this.props.type} ></div>
              <span className="checkmark">
                <div className="checkmark_circle"></div>
                <div className="checkmark_stem"></div>
                <div className="checkmark_kick"></div>
              </span>
          </div>
        );
    }
}
