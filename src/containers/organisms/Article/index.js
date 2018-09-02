import { connect } from 'react-redux';

import Article from '../../../components/organisms/Article';
import {
  fetchEntryByIdRoutine,
  fetchEntryBySlugRoutine,
} from '../../../store/routines';
import {
  getEntryById,
  getEntryBySlug
} from '../../../store/selectors';

const mapStateToProps = (state, { id, match }) => {
  let article = null;
  if (id) {
    article = getEntryById(state, id)
  } else if (match && match.params && match.params.slug ) {
    article = getEntryBySlug(state, match.params.slug)
  }
  if (!article) return {};
  return {
    contentType: article.getIn(['sys', 'contentType', 'sys', 'id']),
    createdAt: article.getIn(['sys', 'createdAt']),
    ...article.get('fields').toJS(),
  }
};

const mapDispatchToProps = {
  fetchArticleById: fetchEntryByIdRoutine,
  fetchArticleBySlug: fetchEntryBySlugRoutine,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
