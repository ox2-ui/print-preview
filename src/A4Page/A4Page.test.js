/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import A4Page from './A4Page';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <A4Page />
  );

  expect(wrapper).toMatchSnapshot();
});
