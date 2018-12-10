import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <ul>
          <li><FormattedMessage id="contact" /></li>
          <li><FormattedMessage id="work" /></li>
          <li><FormattedMessage id="about" /></li>
        </ul>
      </nav>
    );
  }
}
