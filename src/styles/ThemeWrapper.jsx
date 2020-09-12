import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'reset-css';
import 'typeface-quicksand';
import 'typeface-montserrat';
import './global.css';
import theme from './theme';

const ThemeWrapper = props => (
  <ThemeProvider
    theme={theme}
    {...props}
  />
);

export default ThemeWrapper;
