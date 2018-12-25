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
            <li>mail</li>
            <li>linkedin</li>
            <li>Instagram</li>
          </ul>
        </div>
      </VisibilitySensor>
    );
  }
}
