import { createRoutine } from 'redux-saga-routines';

export const fetchContentTypesRoutine = createRoutine('FETCH_CONTENT_TYPES');
export const fetchEntriesRoutine = createRoutine('FETCH_ENTRIES');
export const fetchEntryByIdRoutine = createRoutine('FETCH_ENTRY_BY_ID');
export const fetchEntryBySlugRoutine = createRoutine('FETCH_ENTRY_BY_SLUG');
