import React from 'react';
import styled from 'styled-components';

const Copyright = styled.div`
  address {
    display: inline;
  }
`;

/** @component */
export default () => (
  <Copyright>
      © 2018
      {' '}
      <address><a href="https://davidowens.net">davidowens.net</a></address>
  </Copyright>
);
