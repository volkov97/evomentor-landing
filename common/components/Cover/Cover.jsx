import React from 'react';

import Icon from '../Icon/Icon';

import {
  Wrap,
  Decoration,
  Header,
  Emblem,
  Logo,
  ArrowDown,
} from './Cover.styled';

import LanguageSelect from '../LanguageSelect/LanguageSelect.container';

export default (props) =>
  <Wrap>
    <Header>
        <Emblem src="/images/emblem.png" />
        <Logo src="/images/logo.png" />
    </Header>

    <LanguageSelect />
  </Wrap>
