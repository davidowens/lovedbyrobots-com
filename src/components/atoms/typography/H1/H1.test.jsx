import React from 'react';
import ReactDOM from 'react-dom';
import H1 from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<H1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
