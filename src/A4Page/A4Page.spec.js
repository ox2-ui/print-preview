/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import A4Page from './A4Page';
import { assert } from 'chai';

describe('A4Page', () => {
  it('should render a <A4Page> element', () => {
    const wrapper = shallow(
      <A4Page />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});
