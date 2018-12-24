import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class ProjectHapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="project">
        <a href="https://happydemics.com" target="_blank">
          <div className={"illustration happydemics"} />
        </a>
        <p><FormattedMessage id="happydemics_dates" /></p>
        <p><FormattedMessage id="happydemics_comments" /></p>
      </div>
    );
  }
}
