/*
    Author: yoando
    Date: 2018
    Contact: y.n.dorny@gmail.com
    License: /
*/

import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import Index from './components/indexComponent';
// import store from './store';
import messagesFr from './translations/fr';
import messagesEn from './translations/en';

const messages = {
  fr: messagesFr,
  en: messagesEn,
};
const language = navigator.language.split(/[-_]/)[0];

const css = require('./index.css');

render(
  <IntlProvider locale={language} messages={messages[language]}>
    <Index />
  </IntlProvider>,
  document.getElementById('root'),
);
