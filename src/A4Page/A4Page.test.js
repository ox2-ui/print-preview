/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import A4Page from './A4Page';

const handler = () => true;

it('renders landscape correctly', () => {
  const wrapper = mount(
    <A4Page orientation={'landscape'}>
      <div>Children</div>
    </A4Page>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders portrait correctly', () => {
  const wrapper = mount(
    <A4Page orientation={'portrait'}>
      <div>Children</div>
    </A4Page>,
  );

  expect(wrapper).toMatchSnapshot();
});
