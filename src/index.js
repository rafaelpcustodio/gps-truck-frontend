import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../src/_config/routes';
import GlobalStyle from './global';
import 'bootstrap/dist/css/bootstrap.min.css';

import { dom, library } from '@fortawesome/fontawesome-svg-core'
import * as faIcons from '@fortawesome/free-solid-svg-icons'

const icons = Object.entries(faIcons)
    .map(([ , value ]) => value)
    .filter(({ icon }) => !!icon)

library.add(icons)
dom.watch()

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
