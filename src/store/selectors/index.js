import createCachedSelector from 're-reselect';

export const getEntries = state => state.getIn(['entries', 'data']).filter(entry => {
  const contentType = entry.getIn(['sys', 'contentType', 'sys', 'id']);
  const permittedTypes = [
    'idea',
    'photo',
    'link',
  ];
  return permittedTypes.includes(contentType);
});

export const getEntryById = createCachedSelector(
  getEntries,
  (state, entryId) => entryId,
  (entries, entryId) => entries.find(entry => entry.getIn(['sys', 'id']) === entryId),
)((state, entryId) => entryId);

export const getEntryBySlug = createCachedSelector(
  getEntries,
  (state, entrySlug) => entrySlug,
  (entries, entrySlug) => entries.find(entry => entry.getIn(['fields', 'slug']) === entrySlug),
)((state, entrySlug) => entrySlug);
