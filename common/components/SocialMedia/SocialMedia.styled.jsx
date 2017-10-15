import styled from 'styled-components';
import media from '../../lib/mixins/media';

export const SocialMedia = styled.section`
  position: relative;

  padding: 100px 20px 20px;

  background-color: #e35d5b;

  &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px;

      background: linear-gradient(to top left, transparent 50%, #fff 50%);
  }
`

export const SocialMediaHeader = styled.div`
  margin-bottom: 30px;

  letter-spacing: 1px;
  text-align: center;
  color: #ffffff;

  ${media.desktop`
    font-size: 1.4em;
  `}
`

export const SocialMediaList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const SocialMediaLink = styled.a`
  display: inline-block;

  & > svg {
      width: 40px;
      height: 40px;

      fill: #ffffff;
  }
`

export const SocialMediaIcon = styled.li`
  display: inline-block;
  margin-bottom: 20px;
  width: 28%;
  text-align: center;

  ${media.tablet`
      width: 15%;
  `}
`
