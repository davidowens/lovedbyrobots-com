import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';

import { initialContentTypesState, contentTypes } from './contentTypes';
import { initialEntriesState, entries } from './entries';

export const initialState = Immutable.Map({
  contentTypes: initialContentTypesState,
  entries: initialEntriesState,
});

const appReducer = combineReducers({
  contentTypes,
  entries,
});

export const rootReducer = (state = initialState, action) =>
  appReducer(state, action);
