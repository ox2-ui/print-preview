import React from 'react';
import { storiesOf } from '@kadira/storybook';
import A4Page from './A4Page';

storiesOf('A4Page', module)
  .add('landscape', () => (
    <A4Page orientation="landscape">
      <div style={{backgroundColor: 'THISTLE', height: '100%'}}></div>
    </A4Page>
  ))
  .add('portrait', () => (
    <A4Page orientation="portrait">
      <div style={{backgroundColor: 'MEDIUMAQUAMARINE', height: '100%'}}></div>
    </A4Page>
  ));
