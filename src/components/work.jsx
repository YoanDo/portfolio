import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import ProjectHapp from './projectHapp';
import ProjectCalypso from './projectCalypso';

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'happydemics',
      closing: false,
    };
    this.onChange = this.onChange.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
  }

  onChange(isVisible) {
    const { changeSection } = this.props;
    if (isVisible) { changeSection('work'); }
  }

  updateSelection(choice) {
    const { selection } = this.state
    if (choice !== selection){
      this.setState({ closing: true });
      setTimeout(() => { this.setState({ selection: choice, closing: false }); }, 600);
    }
  }

  render() {
    const { selection, closing } = this.state;
    return (
      <div id="work">
        <VisibilitySensor
          scrollCheck
          onChange={this.onChange}
        >
          <ul>
            <li className={selection === 'happydemics' ? 'active ' : null} onClick={() => this.updateSelection('happydemics')}><h4>Happydemics</h4></li>
            <li className={(selection === 'calypso' ? 'active' : null)} onClick={() => this.updateSelection('calypso')}><h4>Calypso</h4></li>
          </ul>
        </VisibilitySensor>
        <div className={(closing ? 'closing' : null)}>
          {selection === 'happydemics' ? <ProjectHapp /> : null}
          {selection === 'calypso' ? <ProjectCalypso /> : null}
        </div>
      </div>

    );
  }
}
