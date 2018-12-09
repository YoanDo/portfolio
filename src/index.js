/*
    Author: yoando
    Date: 2018
    Contact: y.n.dorny@gmail.com
    License: /
*/

import React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from 'react-intl';
import Index from './components/indexComponent';
import messagesFr from './translations/fr';
import messagesEn from './translations/en';

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

// eslint-disable-next-line
const language = navigator.language.split(/[-_]/)[0];
const css = require('./main.scss');

render(
  <IntlProvider locale={language} messages={messages[language]}>
    <Index />
  </IntlProvider>,
  document.getElementById('root'),
);
