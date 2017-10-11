import React from 'react';

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
        <PosterHeader>Be strong, be active, be healthy!</PosterHeader>
        <PosterText>We want to motivate everyone to take care of their bodies and health better! Speak with professionals and discuss the best solutions for you health and body!</PosterText>
    </PosterContent>
    <PosterBackground />
  </Poster>
