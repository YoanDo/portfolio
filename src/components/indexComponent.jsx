import React, { Component, Fragment } from 'react';
import { addLocaleData } from 'react-intl';
import localeEn from 'react-intl/locale-data/en';
import localeFr from 'react-intl/locale-data/fr';
import Header from './header';
import Nav from './nav';
import About from './about';
import Work from './work';

addLocaleData([...localeEn, ...localeFr]);

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: null,
    };
    this.changeSection = this.changeSection.bind(this);
  }

  changeSection(section) {
    this.setState({ activeSection: section });
  }

  render() {
    const { activeSection } = this.state;
    return (
      <Fragment>
        <Nav activeSection={activeSection} />
        <Header changeSection={this.changeSection} />
        <About changeSection={this.changeSection} />
        <Work changeSection={this.changeSection} />
      </Fragment>
    );
  }
}
