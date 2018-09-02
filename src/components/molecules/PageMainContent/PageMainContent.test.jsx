import React from 'react';
import ReactDOM from 'react-dom';
import PageMainContent from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageMainContent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
