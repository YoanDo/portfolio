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
          <li className={(activeSection === 'contact' ? 'active' : null)}>
            <a href="#contact"><FormattedMessage id="contact" /></a>
          </li>
          <li className={(activeSection === 'work' ? 'active' : null)}>
            <a href="#work"><FormattedMessage id="work" /></a>
          </li>
          <li className={(activeSection === 'about' ? 'active' : null)}>
            <a href="#about"><FormattedMessage id="about" /></a>
          </li>
        </ul>
      </nav>
    );
  }
}
