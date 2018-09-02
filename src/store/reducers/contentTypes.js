import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { fetchContentTypesRoutine } from '../routines';

export const initialContentTypesState = fromJS({
  data: [],
  loading: false,
  error: null,
});

export const contentTypes = handleActions(
  {
    [fetchContentTypesRoutine.REQUEST]() {
      return initialContentTypesState.set('loading', true);
    },
    [fetchContentTypesRoutine.SUCCESS](state, action) {
      return state.set('data', fromJS(action.payload.items));
    },
    [fetchContentTypesRoutine.FAILURE](state, action) {
      return state.set('error', fromJS(action.payload));
    },
    [fetchContentTypesRoutine.FULFILL](state) {
      return state.set('loading', false);
    },
  },
  initialContentTypesState
);
