import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import VisibilitySensor from 'react-visibility-sensor';
import classNames from 'classnames/bind';
import styles from '../main.scss';

const cx = classNames.bind(styles);

export default class ProjectCoach extends Component {
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
    if (selection !== 'coach') {
      this.setState({ visible: false });
    }
  }

  render() {
    const { visible } = this.state;
    const { selection } = this.props;
    const link = 'http://workout-helper-00.herokuapp.com';
    const projectClass = cx({
      project: true,
      active: visible,
      selected: selection === 'coach',
    });

    return (
      <VisibilitySensor
        scrollCheck
        onChange={this.onChange}
      >
        <div className={projectClass}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="project-illustration coach" />
          </a>
          <div className="project-descr">
            <p>
              <FormattedMessage id="coach_dates" />
            </p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FormattedMessage id="discover" />
            </a>
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}
