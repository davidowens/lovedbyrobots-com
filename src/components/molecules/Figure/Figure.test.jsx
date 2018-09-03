import React from 'react';
import ReactDOM from 'react-dom';
import Figure from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Figure />, div);
  ReactDOM.unmountComponentAtNode(div);
});
