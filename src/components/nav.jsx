import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidUpdate(){
    console.log('nav', this.props.activeSection)
  }

  render() {
    return (
      <nav>
        <ul>
          <li><FormattedMessage id="contact" /></li>
          <li><FormattedMessage id="work" /></li>
          <li><a href="#about"><FormattedMessage id="about" /></a></li>
        </ul>
      </nav>
    );
  }
}
