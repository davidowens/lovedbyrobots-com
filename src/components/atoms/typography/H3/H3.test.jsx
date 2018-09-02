import React from 'react';
import ReactDOM from 'react-dom';
import H3 from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<H3 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
