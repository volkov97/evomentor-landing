import React from 'react';
import { I18n } from 'react-redux-i18n';

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
    <SocialMediaHeader>{I18n.t('SocialMedia::title')}</SocialMediaHeader>
    <SocialMediaList>
        <SocialMediaIcon><SocialMediaLink href="https://www.vk.com/evomentor" target="_blank"><Icon type="vk" /></SocialMediaLink></SocialMediaIcon>
        <SocialMediaIcon><SocialMediaLink href="https://www.instagram.com/evomentor/" target="_blank"><Icon type="instagram" /></SocialMediaLink></SocialMediaIcon>
        <SocialMediaIcon><SocialMediaLink href="https://www.facebook.com/evomentor/" target="_blank"><Icon type="fb" /></SocialMediaLink></SocialMediaIcon>
    </SocialMediaList>
  </SocialMedia>
