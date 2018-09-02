import React from 'react';
import ReactDOM from 'react-dom';
import P from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<P />, div);
  ReactDOM.unmountComponentAtNode(div);
});
