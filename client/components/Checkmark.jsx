'use strict';

import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';

export default class Checkmark extends Component {
    render() {
      return (
        <div className="checkmark_circle circle_container checkmark-animation">
          <div className="circle_container rotate ok-animation">
            <div className="checkmark_stem"></div>
            <div className="checkmark_kick"></div>
          </div>
        </div>
      );
    }
}
