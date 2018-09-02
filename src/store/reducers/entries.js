import { fromJS } from 'immutable';
import { combineActions, handleActions } from 'redux-actions';
import {
  fetchEntriesRoutine,
  fetchEntryByIdRoutine,
  fetchEntryBySlugRoutine,
} from '../routines';

export const initialEntriesState = fromJS({
  data: [],
  loading: false,
  error: null,
});

const updateEntries = (entries, newEntries) => {
  return newEntries.reduce((updatedEntries, newEntry) => {
    const immutableNewEntry = fromJS(newEntry);
    const exisitngIndex = entries.findIndex(entry => entry.get('id') === newEntry.id);
    if (exisitngIndex > -1) {
      return entries.update(exisitngIndex, () => immutableNewEntry);
    } else {
      return entries.push(immutableNewEntry);
    }
  }, entries);
}

export const entries = handleActions(
  {
    [combineActions(
      fetchEntriesRoutine.REQUEST,
      fetchEntryByIdRoutine.REQUEST,
      fetchEntryBySlugRoutine.REQUEST
    )](state) {
      return state.set('loading', true).set('error', null);
    },
    [combineActions(
      fetchEntriesRoutine.SUCCESS,
      fetchEntryByIdRoutine.SUCCESS,
      fetchEntryBySlugRoutine.SUCCESS
    )](state, action) {
      return state.set('data', updateEntries(state.get('data'), action.payload.items));
    },
    [combineActions(
      fetchEntriesRoutine.FAILURE,
      fetchEntryByIdRoutine.FAILURE,
      fetchEntryBySlugRoutine.FAILURE
    )](state, action) {
      return state.set('error', fromJS(action.payload));
    },
    [combineActions(
      fetchEntriesRoutine.FULFILL,
      fetchEntryByIdRoutine.FULFILL,
      fetchEntryBySlugRoutine.FULFILL
    )](state) {
      return state.set('loading', false);
    },
  },
  initialEntriesState
);
