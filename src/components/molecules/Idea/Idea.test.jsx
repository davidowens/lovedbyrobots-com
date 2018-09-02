import React from 'react';
import ReactDOM from 'react-dom';
import Idea from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Idea />, div);
  ReactDOM.unmountComponentAtNode(div);
});
