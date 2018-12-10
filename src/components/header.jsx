import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="header">
        <h4>Yoan Dorny</h4>
        <h1 className="header-text slideInUp">
          °/yo
        </h1>
      </div>
    );
  }
}
