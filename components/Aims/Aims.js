import React from 'react';

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
    <AimsTitle>What is our aim?</AimsTitle>
    <AimsDescription>We want you to be fit. We care about your healthy. And we are able to save your time. So if you answer with "Yes" on one of the questions below - "Evomentor" is made for you!</AimsDescription>
    <AimsList>
        <Aim>
            <AimIcon><Icon type="question" /></AimIcon>
            <AimText>You don't have time to go to a gym?</AimText>
        </Aim>
        <Aim>
            <AimIcon><Icon type="question" /></AimIcon>
            <AimText>You are dreaming about a perfect body?</AimText>
        </Aim>
        <Aim>
            <AimIcon><Icon type="question" /></AimIcon>
            <AimText>You are afraid of loosing much money for no fitness result?</AimText>
        </Aim>
        <Aim>
            <AimIcon><Icon type="question" /></AimIcon>
            <AimText>You don't really need hard trainings and just want to be fit?</AimText>
        </Aim>
        <Aim>
            <AimIcon><Icon type="question" /></AimIcon>
            <AimText>You need a well-prepared training program created espesially for you?</AimText>
        </Aim>
        <Aim>
            <AimIcon><Icon type="question" /></AimIcon>
            <AimText>You just have a question that you want to ask a professional?</AimText>
        </Aim>
    </AimsList>
  </Aims>
