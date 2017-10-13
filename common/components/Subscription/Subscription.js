import React from 'react';

import Icon from '../Icon/Icon';

import {
  Wrap,
  Subscription,
  Header,
  Description,
  Form,
  Input,
  SubmitButton,
} from './Subscription.styled';

export default ({ email, message, isLoading, onChange, onSubscribe }) =>
  <Wrap>
    <Subscription>
      <Header>Subscribe, we need you!</Header>
      <Description>Why do we need your email? We want to notify you about the status of our main project and if we will have some activities - we will also notify you!</Description>
      <Form>
          <Input
            placeholder="Your Email"

            name="email"
            readOnly={!!message}
            value={email}
            onChange={onChange}
          />
          {message ?
            <SubmitButton onClick={(event) => { event.preventDefault(); }}><Icon type="success" /></SubmitButton>
            :
            <SubmitButton onClick={(event) => { event.preventDefault(); onSubscribe(email); }}>
              {isLoading ?
                <Icon type="loader" />
                :
                'Subscribe'
              }
            </SubmitButton>
          }
      </Form>
    </Subscription>
  </Wrap>
