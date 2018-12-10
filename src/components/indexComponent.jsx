import React from 'react';
import { addLocaleData } from 'react-intl';
import localeEn from 'react-intl/locale-data/en';
import localeFr from 'react-intl/locale-data/fr';
import Header from './header';
import Nav from './nav';

addLocaleData([...localeEn, ...localeFr]);

export default () => (
  <div className="">
    <Nav />
    <Header />
  </div>
);
