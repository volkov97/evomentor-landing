import styled from 'styled-components';
import media from '../../lib/mixins/media';
import { clearFix } from 'polished';

export const Features = styled.section`
  padding: 50px 20px 25px;

  ${media.tablet`
    margin: 0 auto;
    max-width: 540px;
  `}

  ${media.desktop`
    max-width: 800px;
  `}
`

export const FeaturesSectionHeader = styled.header`
`

export const FeaturesHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;

  font-size: 1.8em;
  font-weight: lighter;
  line-height: 1.4;
  color: #e35d5b;

  ${media.desktop`
    font-size: 2.4em;
  `}
`

export const FeaturesText = styled.div`
  margin-bottom: 40px;

  line-height: 1.6;
  color: #4b4b4c;

  ${media.desktop`
    margin-bottom: 60px;
    font-size: 1.6em;
  `}
`

export const FeaturesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Feature = styled.li`
  display: flex;

  margin-bottom: 36px;

  ${media.desktop`
    margin-bottom: 56px;
  `}
`

export const FeatureIcon = styled.div`
  margin-right: 20px;

  ${media.tablet`
    margin-right: 30px;
  `}

  & > svg {
      width: 58px;
      height: 58px;

      fill: #e35d5b;

      ${media.desktop`
        width: 80px;
        height: 80px;
      `}
  }
`

export const FeatureContent = styled.div`
`

export const FeatureTitle = styled.div`
  margin-bottom: 8px;

  font-weight: bold;
  line-height: 1.3;
  color: #4b4b4c;

  ${media.desktop`
    font-size: 1.6em;
  `}
`

export const FeatureText = styled.div`
  font-size: 0.9em;
  line-height: 1.4;

  ${media.desktop`
    font-size: 1.4em;
  `}
`
