import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import Immutable, { isImmutable } from 'immutable';
import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router/immutable';

import history from '../history';
import rootSaga from './sagas';
import { rootReducer, initialState } from './reducers';
import config from '../config';

const showDevTools = config.showDevTools;

export const bindMiddleware = middleware => {
  if (showDevTools) {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export function configureStore(state = initialState) {
  const immutableState = isImmutable(state) ? state : Immutable.fromJS(state);

  const sagaMiddleware = createSagaMiddleware();
  const middleWare = [routerMiddleware(history), sagaMiddleware];

  const store = createStore(
    connectRouter(history)(rootReducer),
    immutableState,
    bindMiddleware(middleWare)
  );

  if (module.hot) {
    // Webpack hot module replacement
    module.hot.accept('./reducers', () => {
      /* eslint-disable-next-line global-require */
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;
}
