import styled from 'styled-components';
import media from '../../lib/mixins/media';
import { clearFix } from 'polished';

export const Wrap = styled.div`
    border-top: 1px solid #eeeeee;
`;

export const Trainer = styled.section`
  padding: 50px 20px;

  ${media.tablet`
    margin: 0 auto;
    max-width: 540px;
  `}

  ${media.desktop`
    max-width: 800px;
  `}
`

export const TrainerSectionHeader = styled.header`
`

export const TrainerHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;

  font-size: 1.8em;
  line-height: 1.4;
  color: #e35d5b;

  ${media.desktop`
    font-size: 2.4em;
  `}
`

export const TrainerText = styled.div`
  margin-bottom: 20px;

  line-height: 1.6;
  color: #4b4b4c;

  ${media.desktop`
    margin-bottom: 30px;
    font-size: 1.6em;
  `}
`

export const TrainerList = styled.ul`
  margin: 0;
  padding: 20px 0 0;
  list-style: none;
`

export const TrainerOne = styled.li`
  display: flex;

  margin-bottom: 36px;

  ${media.desktop`
    margin-bottom: 56px;
  `}
`

export const TrainerOneIcon = styled.div`
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

export const TrainerOneContent = styled.div`
`

export const TrainerOneTitle = styled.div`
  margin-bottom: 8px;

  font-weight: bold;
  line-height: 1.3;
  color: #4b4b4c;

  ${media.desktop`
    font-size: 1.6em;
  `}
`

export const TrainerOneText = styled.div`
  font-size: 0.9em;
  line-height: 1.4;

  ${media.desktop`
    font-size: 1.4em;
  `}
`

export const AndMore = styled.div`
  font-weight: bold;
  text-align: center;
  color: #e35d5b;
`;
