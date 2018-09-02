import { call, put, takeLatest } from 'redux-saga/effects';

const createRoutineWatcher = (routine, apiMethod) => {
  function* handler({ payload }) {
    yield put(routine.request());
    try {
      const response = yield call(apiMethod, payload);
      yield put(routine.success(response));
    } catch (error) {
      yield put(routine.failure(error.message));
    }
    yield put(routine.fulfill());
  }

  return function* watchRoutine() {
    yield takeLatest(routine.TRIGGER, handler);
  };
};

export default createRoutineWatcher;
