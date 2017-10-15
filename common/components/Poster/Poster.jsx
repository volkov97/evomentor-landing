import React from 'react';
import { I18n } from 'react-redux-i18n';

import Icon from '../Icon/Icon';

import {
  Poster,
  PosterContent,
  PosterBackground,
  PosterHeader,
  PosterText,
} from './Poster.styled';

export default (props) =>
  <Poster>
    <PosterContent>
        <PosterHeader>{I18n.t('Poster::title')}</PosterHeader>
        <PosterText>{I18n.t('Poster::description-one')}</PosterText>
        <PosterText>{I18n.t('Poster::description-two')}</PosterText>
    </PosterContent>
    <PosterBackground />
  </Poster>
