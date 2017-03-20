/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import A4Page from './A4Page';

const handler = () => true;

it('renders landscape correctly', () => {
  const wrapper = mount(
    <A4Page landscape={true}>
      <div>Children</div>
    </A4Page>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders portrait correctly', () => {
  const wrapper = mount(
    <A4Page>
      <div>Children</div>
    </A4Page>,
  );

  expect(wrapper).toMatchSnapshot();
});
