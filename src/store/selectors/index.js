import createCachedSelector from 're-reselect';

export const getEntries = state => state.getIn(['entries', 'data']);

export const getEntryById = createCachedSelector(
  getEntries,
  (state, entryId) => entryId,
  (entries, entryId) => entries.find(entry => entry.getIn(['sys', 'id']) === entryId)
)((state, entryId) => entryId);

export const getEntryBySlug = createCachedSelector(
  getEntries,
  (state, entrySlug) => entrySlug,
  (entries, entrySlug) => entries.find(entry => entry.getIn(['fields', 'slug']) === entrySlug)
)((state, entrySlug) => entrySlug);
