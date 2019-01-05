import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import * as Scroll from 'react-scroll';
import {
  Link, Element, Events, animateScroll as scroll, scrollSpy, scroller,
} from 'react-scroll';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { activeSection } = this.props;
    return (
      <nav>
        <ul>
          <li className={(activeSection === 'contact' ? 'active' : null)}>
            <Link activeClass="active" to="contact" spy smooth duration={500}><FormattedMessage id="contact" /></Link>
          </li>
          <li className={(activeSection === 'work' ? 'active' : null)}>
            <Link activeClass="active" to="work" spy smooth duration={500} offset={-300}><FormattedMessage id="work" /></Link>
          </li>
          <li className={(activeSection === 'about' ? 'active' : null)}>
            <Link activeClass="active" to="about" spy smooth duration={500} offset={-200}><FormattedMessage id="about" /></Link>
          </li>
        </ul>
      </nav>
    );
  }
}
