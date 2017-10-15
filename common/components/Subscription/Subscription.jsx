import React from 'react';
import { I18n } from 'react-redux-i18n';
import ym from 'react-yandex-metrika';

import Icon from '../Icon/Icon';

import {
  Wrap,
  Subscription,
  Header,
  Description,
  Error,
  Form,
  Input,
  SubmitButton,
} from './Subscription.styled';

export default ({ email, message, error, isLoading, onChange, onSubscribe }) =>
  <Wrap>
    <Subscription>
      <Header>{I18n.t('Subscription::title')}</Header>
      <Description>{I18n.t('Subscription::description')}</Description>
      {error && <Error>{I18n.t('Subscription::error')}</Error>}
      <Form>
          <Input
            type="email"
            placeholder={I18n.t('Subscription::email')}

            name="email"
            readOnly={!!message}
            value={email}
            onChange={onChange}
            required
          />
          {message ?
            <SubmitButton
              type="submit"
              onClick={(event) => { event.preventDefault(); }}
            >
              <Icon type="success" />
            </SubmitButton>
            :
            <SubmitButton
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                ym('reachGoal', 'subscribe_button_clicked');
                onSubscribe(email);
              }}
            >
              {isLoading ?
                <Icon type="loader" />
                :
                I18n.t('Subscription::subscribe')
              }
            </SubmitButton>
          }
      </Form>
    </Subscription>
  </Wrap>
