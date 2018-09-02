import { all, fork } from 'redux-saga/effects';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { map } from 'ramda';

import {
  watchFetchContentTypes,
} from './contentTypes';

import {
  watchFetchEntries,
  watchFetchEntryById,
  watchFetchEntryBySlug,
} from './entries';

const combinedSagas = {
  watchFetchContentTypes,
  watchFetchEntries,
  watchFetchEntryById,
  watchFetchEntryBySlug,
  routinePromiseWatcherSaga,
};

function* rootSaga() {
  yield all(map(fork, combinedSagas));
}

export default rootSaga;
