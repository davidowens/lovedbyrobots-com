import { connect } from 'react-redux';

import ArticlesList from '../../../components/organisms/ArticlesList';
import { fetchEntriesRoutine } from '../../../store/routines';
import { getEntries } from '../../../store/selectors';

const mapStateToProps = (state) => ({
  articles: getEntries(state),
});

const mapDispatchToProps = {
  fetchArticles: fetchEntriesRoutine,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
