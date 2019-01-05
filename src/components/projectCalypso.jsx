import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import VisibilitySensor from 'react-visibility-sensor';
import classNames from 'classnames/bind';
import styles from '../main.scss';

const cx = classNames.bind(styles);

export default class ProjectCalypso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    const { selection } = this.props;
    if (isVisible) {
      this.setState({ visible: isVisible });
    }
    if (selection !== 'calypso') {
      this.setState({ visible: false });
    }
  }

  render() {
    const { visible } = this.state;
    const { selection } = this.props;
    const link = 'http://calypso.surf';
    const projectClass = cx({
      project: true,
      active: visible,
      selected: selection === 'calypso',
    });

    return (
      <VisibilitySensor
        scrollCheck
        onChange={this.onChange}
      >
        <div className={projectClass}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="project-illustration calypso" />
          </a>
          <div className="project-descr">
            <p>
              <FormattedMessage id="calypso_dates" />
            </p>
            <a href={link}>
              <FormattedMessage id="discover" />
            </a>
            <a href="https://youtu.be/EDdyiaX6bw0?t=650" target="_blank" rel="noopener noreferrer">
              <FormattedMessage id="calypso_pitch" />
            </a>
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}
