import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Scroller } from '.'; // class not withRouter version

it('renders without crashing', () => {
  shallow(
    <Scroller 
      location={{}} 
    >
      <div>
        some child
      </div>
    </Scroller>
  );
});

describe('componentDidUpdate()', () => {
  it('call scrollToTop when location prop changes', () => {
      const spy = sinon.spy(Scroller.prototype, 'scrollToTop');
      let location = {};
      const wrapper = shallow(
        <Scroller 
          location={{}} 
        >
          <div>
            some child
          </div>
        </Scroller>
      );

      spy.resetHistory();
      location = {}; // different Object, so did update
      wrapper.setProps({ location });
      expect(spy.calledOnce).toBe(true);
  })
})
