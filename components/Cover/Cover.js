import React from 'react';

import Icon from '../Icon/Icon';

import {
  Wrap,
  Header,
  Emblem,
  Logo,
  ArrowDown,
} from './Cover.styled';

export default (props) =>
  <Wrap>
    <Header>
        <Emblem src="/static/images/emblem.png" />
        <Logo src="/static/images/logo.png" />
    </Header>
    <ArrowDown><Icon type="arrow-down" /></ArrowDown>
  </Wrap>
