import React from 'react';
import { I18n } from 'react-redux-i18n';

import Icon from '../Icon/Icon';

import {
  Aims,
  AimsTitle,
  AimsDescription,
  AimsList,
  Aim,
  AimIcon,
  AimText,
} from './Aims.styled';

export default (props) =>
  <Aims>
    <AimsTitle>{I18n.t('Aims::title')}</AimsTitle>
    <AimsDescription>{I18n.t('Aims::description-one')}</AimsDescription>
    <AimsDescription>{I18n.t('Aims::description-two')}</AimsDescription>
    <AimsList>
        {[
            'Aims::perfect-body',
            'Aims::special-program',
            'Aims::loose-money',
            'Aims::no-hard-trainings',
            'Aims::no-time-gym',
            'Aims::ask-question',
        ].map((key, index) => (
            <Aim key={index}>
                <AimIcon><Icon type="question" /></AimIcon>
                <AimText>{I18n.t(key)}</AimText>
            </Aim>
        ))}
    </AimsList>
  </Aims>
