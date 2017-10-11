import React from 'react';

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
        <FeaturesHeader>So what do we want to suggest you?</FeaturesHeader>
        <FeaturesText>Here are only few features of our future product that you will really like! Interface is made in a way to make you feel comfortable and do things in a fastest way!</FeaturesText>
    </FeaturesSectionHeader>
    <FeaturesList>
        <Feature>
            <FeatureIcon><Icon type="design" /></FeatureIcon>
            <FeatureContent>
              <FeatureTitle>Clean design</FeatureTitle>
              <FeatureText>Nothing that will disturb you. Only things that you need.</FeatureText>
            </FeatureContent>
        </Feature>
        <Feature>
            <FeatureIcon><Icon type="profile" /></FeatureIcon>
            <FeatureContent>
              <FeatureTitle>Informative trainer profiles</FeatureTitle>
              <FeatureText>You will be able to find all information you need to understand is this mentor is able to help you.</FeatureText>
            </FeatureContent>
        </Feature>
        <Feature>
            <FeatureIcon><Icon type="search" /></FeatureIcon>
            <FeatureContent>
              <FeatureTitle>Comfortable and fast search</FeatureTitle>
              <FeatureText>Search for mentors in the fastest way using different types of filters and sortings.</FeatureText>
            </FeatureContent>
        </Feature>
        <Feature>
            <FeatureIcon><Icon type="favourites" /></FeatureIcon>
            <FeatureContent>
              <FeatureTitle>Favourites</FeatureTitle>
              <FeatureText>You like a trainer, but want to chat later? No problem - just add his profile page to favourites in one click.</FeatureText>
            </FeatureContent>
        </Feature>
        <Feature>
            <FeatureIcon><Icon type="schedule" /></FeatureIcon>
            <FeatureContent>
              <FeatureTitle>Schedule is on the first page</FeatureTitle>
              <FeatureText>Don't waste time - schedule is always where you need it. View trainings, exercises and discuss them with your trainer.</FeatureText>
            </FeatureContent>
        </Feature>
        <Feature>
            <FeatureIcon><Icon type="stars" /></FeatureIcon>
            <FeatureContent>
              <FeatureTitle>Stars</FeatureTitle>
              <FeatureText>Star your trainer - to tell everyone that he is the best!</FeatureText>
            </FeatureContent>
        </Feature>
    </FeaturesList>
</Features>
