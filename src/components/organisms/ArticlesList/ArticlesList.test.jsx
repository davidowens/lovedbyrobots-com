import React from 'react';
import ReactDOM from 'react-dom';
import ArticlesList from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArticlesList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
