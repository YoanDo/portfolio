import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import VisibilitySensor from 'react-visibility-sensor';
import ProjectHapp from './projectHapp';

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'happydemics'
    };
    this.onChange = this.onChange.bind(this);
    this.updateSelection = this.updateSelection.bind(this)
  }

  onChange(isVisible) {
    const { changeSection } = this.props;
    if (isVisible) { changeSection('work'); }
  }

  updateSelection(choice) {
    this.setState({ selection: choice })
    console.log(choice)
  }

  render() {
    const { selection } = this.state;
    return (
      <VisibilitySensor
        scrollCheck
        onChange={this.onChange}
      >
        <div id="work">
          <ul>
            <li className={(selection === 'happydemics' ? 'active' : null)} onClick={ () => this.updateSelection('happydemics') }><h4>Happydemics</h4></li>
            <li className={(selection === 'calypso' ? 'active' : null)} onClick={ () => this.updateSelection('calypso') }><h4>Calypso</h4></li>
          </ul>
          {selection === 'happydemics' ? <ProjectHapp /> : null}
        </div>
      </VisibilitySensor>
    );
  }
}