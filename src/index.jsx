import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';

import history from './history';
import { configureStore } from './store';

import App from './App';
import ScrollToTop from './components/atoms/ScrollToTop';
import ThemeWrapper from './styles/ThemeWrapper';
import registerServiceWorker from './registerServiceWorker';

const ConnectedApp = connect()(App);
const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ScrollToTop>
        <ThemeWrapper>
          <ConnectedApp />
        </ThemeWrapper>
      </ScrollToTop>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
