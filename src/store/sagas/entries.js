import contentful from '../../integrations/contentful';
import {
  fetchEntriesRoutine,
  fetchEntryByIdRoutine,
  fetchEntryBySlugRoutine,
} from '../routines';
import createRoutineWatcher from './createRoutineWatcher';

export const watchFetchEntries = createRoutineWatcher(
  fetchEntriesRoutine,
  contentful.getEntries,
);

export const watchFetchEntryById = createRoutineWatcher(
  fetchEntryByIdRoutine,
  contentful.getEntries,
);

export const watchFetchEntryBySlug = createRoutineWatcher(
  fetchEntryBySlugRoutine,
  contentful.getEntries,
);
