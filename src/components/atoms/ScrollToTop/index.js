import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class Scroller extends Component {
  static propTypes = {
    location: PropTypes.shape().isRequired,
    children: PropTypes.node.isRequired,
  };

  componentDidUpdate({ location: oldLocation }) {
    const { location: newLocation } = this.props;
    if (newLocation !== oldLocation) {
      this.scrollToTop();
    }
  }

  /* eslint-disable class-methods-use-this */
  scrollToTop() {
    window.scrollTo(0, 0); // side effect, in separate, spyable method
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const { children } = this.props;
    return children;
  }
}

export default withRouter(Scroller);
