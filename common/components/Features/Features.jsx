import React from 'react';
import { I18n } from 'react-redux-i18n';

import Icon from '../Icon/Icon';

import {
  Features,
  FeaturesSectionHeader,
  FeaturesHeader,
  FeaturesText,
  FeaturesList,
  Feature,
  FeatureIcon,
  FeatureContent,
  FeatureTitle,
  FeatureText,
} from './Features.styled';

export default (props) =>
  <Features>
    <FeaturesSectionHeader>
        <FeaturesHeader>{I18n.t('Features::title')}</FeaturesHeader>
        <FeaturesText>{I18n.t('Features::text-one')}</FeaturesText>
        <FeaturesText>{I18n.t('Features::text-two')}</FeaturesText>
    </FeaturesSectionHeader>
    <FeaturesList>
        {[
            { icon: 'design', title: 'Features::clean-design', text: 'Features::clean-design-text' },
            { icon: 'search', title: 'Features::fast-search', text: 'Features::fast-search-text' },
            { icon: 'profile', title: 'Features::informative-profiles', text: 'Features::informative-profiles-text' },
            { icon: 'favourites', title: 'Features::favourites', text: 'Features::favourites-text' },
            { icon: 'stars', title: 'Features::stars', text: 'Features::stars-text' },
            { icon: 'schedule', title: 'Features::schedule', text: 'Features::schedule-text' },
        ].map((feature, index) => (
            <Feature key={index}>
                <FeatureIcon><Icon type={feature.icon} /></FeatureIcon>
                <FeatureContent>
                    <FeatureTitle>{I18n.t(feature.title)}</FeatureTitle>
                    <FeatureText>{I18n.t(feature.text)}</FeatureText>
                </FeatureContent>
            </Feature>
        ))}
    </FeaturesList>
</Features>
