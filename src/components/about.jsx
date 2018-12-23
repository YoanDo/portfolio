import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="about">
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
    );
  }
}
