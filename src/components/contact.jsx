import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import VisibilitySensor from 'react-visibility-sensor';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    const { changeSection } = this.props;
    if (isVisible) { changeSection('contact'); }
  }

  render() {
    return (
      <VisibilitySensor
        scrollCheck
        onChange={this.onChange}
      >
        <div id="contact">
        <h3><FormattedMessage id="contact_me" /></h3>
          <ul className="social">
            <li>social</li>
            <li><a href="mailto:y.n.dorny@gmail.com" rel="noopener noreferrer">mail</a></li>
            <li><a href="https://www.linkedin.com/in/ydorny/" target="_blank" rel="noopener noreferrer">linkedin</a></li>
            <li><a href="https://www.instagram.com/yn_d/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </VisibilitySensor>
    );
  }
}
