import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import VisibilitySensor from 'react-visibility-sensor';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    const { changeSection } = this.props;
    if (isVisible) { changeSection('header'); }
  }

  render() {
    return (
      <VisibilitySensor
        scrollCheck
        onChange={this.onChange}
      >
        <div id="header">
          <h5>Yoan Dorny.</h5>
          <Parallax
            offsetXMax={100}
            offsetXMin={-100}
            slowerScrollRate
          >
            <h1 className="header-text slideInUp desktop-only">
              °/ yo
            </h1>
          </Parallax>
          <h1 className="header-text slideInUp mobile-only">
            yo
          </h1>
        </div>
      </VisibilitySensor>
    );
  }
}
