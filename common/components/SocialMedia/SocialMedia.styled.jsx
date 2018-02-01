import styled from 'styled-components';
import media from '../../lib/mixins/media';

export const SocialMedia = styled.section`
  position: relative;

  padding: 50px 20px 20px;

  background-color: #e35d5b;
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
