import React, { Component } from 'react';

export default class Sheet extends Component {
  render() {
    return (
      <div className={ `sheet sheet-${this.props.type}` }>
        { this.props.children }
      </div>
    );
  }
}
