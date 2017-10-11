import styled from 'styled-components';
import media from '../../lib/mixins/media';

export const Poster = styled.section`
  position: relative;
  padding: 50px 0 0;

  min-height: 400px;

  border-top: 1px solid #eeeeee;
`

export const PosterBackground = styled.div`
  min-height: 250px;
  background: #fff url('/images/poster_mobile.jpg') 50% 100% no-repeat;
  background-size: cover;

  ${media.tablet`
    min-height: 450px;
    background-image: url('/images/poster_tablet.jpg');
  `}

  ${media.desktop`
    min-height: 750px;
    background-image: url('/images/poster_desktop.jpg');
  `}
`

export const PosterContent = styled.div`
  padding: 0 20px 40px;

  ${media.tablet`
    margin: 0 auto;
    max-width: 540px;
  `}

  ${media.desktop`
    max-width: 800px;
  `}
`

export const PosterHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;

  font-size: 1.8em;
  line-height: 1.4;
  color: #e35d5b;

  ${media.desktop`
    font-size: 2.4em;
  `}
`

export const PosterText = styled.div`
  line-height: 1.6;
  color: #4b4b4c;

  ${media.desktop`
    font-size: 1.6em;
  `}
`
