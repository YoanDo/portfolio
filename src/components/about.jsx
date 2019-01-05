import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import VisibilitySensor from 'react-visibility-sensor';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    const { changeSection } = this.props;
    if (isVisible) { changeSection('about'); }
  }

  render() {
    return (
      <VisibilitySensor
        scrollCheck
        onChange={this.onChange}
      >
        <div id="about" name="about">
          <h3><FormattedMessage id="hello" /></h3>
          <p><FormattedMessage id="yoan" /></p>
          <p><FormattedMessage id="stack" /></p>
          <p>
            <FormattedMessage id="background_wagon" />
            <br />
            <FormattedMessage id="background_istec" />
            <br />
            <FormattedMessage id="background_faap" />
            <br />
            <FormattedMessage id="background_ufv" />
          </p>
        </div>
      </VisibilitySensor>
    );
  }
}
