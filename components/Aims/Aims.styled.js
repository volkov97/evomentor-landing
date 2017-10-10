import styled from 'styled-components';
import media from '../../lib/mixins/media';

export const Aims = styled.section`
    padding: 50px 20px 40px;

    ${media.tablet`
        margin: 0 auto;
        max-width: 540px;
    `}

    ${media.desktop`
        max-width: 800px;
    `}
`

export const AimsTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 20px;

    font-size: 1.8em;
    line-height: 1.4;
    color: #e35d5b;

    ${media.desktop`
        font-size: 2.4em;
    `}
`

export const AimsDescription = styled.div`
    margin-bottom: 34px;

    font-size: 1.2em;
    line-height: 1.6;
    color: #4b4b4c;

    ${media.desktop`
        font-size: 1.6em;
    `}
`

export const AimsList = styled.ul`
    padding: 0;
    list-style: none;
`

export const Aim = styled.li`
    display: flex;
    align-items: center;

    margin-bottom: 18px;

    ${media.desktop`
        margin-bottom: 28px;
    `}
`

export const AimIcon = styled.div`
    margin-right: 15px;

    & > svg {
        width: 28px;
        height: 28px;

        vertical-align: middle;

        ${media.desktop`
            width: 42px;
            height: 42px;
        `}
    }
`

export const AimText = styled.div`
    font-size: 1em;
    line-height: 1.5;

    ${media.desktop`
        font-size: 1.4em;
    `}
`
