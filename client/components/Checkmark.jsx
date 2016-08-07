'use strict';

import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';

export default class Checkmark extends Component {
    render() {
      return (
        <span className="checkmark">
          <div className="checkmark_circle"></div>
          <div className="checkmark_stem"></div>
          <div className="checkmark_kick"></div>
        </span>
      );
    }
}
