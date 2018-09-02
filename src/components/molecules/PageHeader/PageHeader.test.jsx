import React from 'react';
import ReactDOM from 'react-dom';
import PageHeader from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
