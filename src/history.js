import { createBrowserHistory, createMemoryHistory } from 'history';
import isBrowser from './lib/isBrowser';

const history = isBrowser ? createBrowserHistory() : createMemoryHistory();

export default history;
