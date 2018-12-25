import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import VisibilitySensor from 'react-visibility-sensor';

export default class ProjectHapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    if (isVisible) {
      this.setState({ visible: isVisible });
    }
  }

  render() {
    const { visible } = this.state;
    const link = "https://happydemics.com";
    return (
      <VisibilitySensor
        scrollCheck
        onChange={this.onChange}
      >
        <div className={'project ' + (visible ? 'active' : null)}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="project-illustration happydemics" />
          </a>
          <div className="project-descr">
            <p>
              <FormattedMessage id="happydemics_dates" />
            </p>
            <a href={link}>
              <FormattedMessage id="discover" />
            </a>
          </div>
          {/* <p><FormattedMessage id="happydemics_comments" /></p> */}
        </div>
      </VisibilitySensor>
    );
  }
}
