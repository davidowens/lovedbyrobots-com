import contentful from '../../integrations/contentful';
import {
  fetchContentTypesRoutine,
} from '../routines';
import createRoutineWatcher from './createRoutineWatcher';

export const watchFetchContentTypes = createRoutineWatcher(
  fetchContentTypesRoutine,
  contentful.getContentTypes
);
