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

export default (props) =>
  <Wrap>
    <Subscription>
      <Header>Subscribe, we need you!</Header>
      <Description>Why do we need your email? We want to notify you about the status of our main project and if we will have some activities - we will also notify you!</Description>
      <Form>
          <Input
            placeholder="Your Email"
          />
          <SubmitButton>Subscribe</SubmitButton>
      </Form>
    </Subscription>
  </Wrap>
