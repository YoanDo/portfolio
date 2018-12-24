import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { activeSection } = this.props;
    return (
      <nav>
        <ul>
          <li><FormattedMessage id="contact" /></li>
          <li><FormattedMessage id="work" /></li>
          <li className={(activeSection === 'about' ? 'active' : null)}>
            <a href="#about"><FormattedMessage id="about" /></a>
          </li>
        </ul>
      </nav>
    );
  }
}
