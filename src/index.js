/*
    Author: yoando
    Date: 2018
    Contact: y.n.dorny@gmail.com
    License: /
*/

import React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from 'react-intl';
import { ParallaxProvider } from 'react-scroll-parallax';
import Index from './components/indexComponent';
import messagesFr from './assets/translations/fr';
import messagesEn from './assets/translations/en';

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

// eslint-disable-next-line
const language = navigator.language.split(/[-_]/)[0];
const css = require('./main.scss');

render(
  <ParallaxProvider>
    <IntlProvider locale={language} messages={messages[language]}>
      <Index />
    </IntlProvider>
  </ParallaxProvider>,
  document.getElementById('root'),
);
