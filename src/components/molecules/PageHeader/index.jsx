import React from 'react';
import { Link } from 'react-router-dom';

import H1 from '../../atoms/typography/H1';

const PageHeader = () => (
  <header>
    <H1>
      <Link to="/">
        Loved by Robots
      </Link>
    </H1>
  </header>
);

/** @component */
export default PageHeader;
