import React from 'react';

import Icon from '../Icon/Icon';

import {
  SocialMedia,
  SocialMediaHeader,
  SocialMediaList,
  SocialMediaLink,
  SocialMediaIcon
} from './SocialMedia.styled';

export default (props) =>
  <SocialMedia>
    <SocialMediaHeader>Keep In Touch</SocialMediaHeader>
    <SocialMediaList>
        <SocialMediaIcon><SocialMediaLink><Icon type="vk" /></SocialMediaLink></SocialMediaIcon>
        <SocialMediaIcon><SocialMediaLink><Icon type="fb" /></SocialMediaLink></SocialMediaIcon>
        <SocialMediaIcon><SocialMediaLink><Icon type="instagram" /></SocialMediaLink></SocialMediaIcon>
    </SocialMediaList>
  </SocialMedia>
