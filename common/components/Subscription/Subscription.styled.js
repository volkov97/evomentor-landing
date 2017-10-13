import styled from 'styled-components';
import media from '../../lib/mixins/media';

export const Wrap = styled.div`
`;

export const Subscription = styled.div`
    padding: 50px 20px 60px;

    ${media.tablet`
        margin: 0 auto;
        max-width: 540px;
    `}

    ${media.desktop`
        padding-bottom: 70px;
        max-width: 800px;
    `}
`;

export const Header = styled.div`
    margin-top: 0;
    margin-bottom: 20px;

    font-size: 1.8em;
    line-height: 1.4;
    color: #e35d5b;

    ${media.desktop`
        font-size: 2.4em;
    `}
`;

export const Description = styled.div`
    margin-bottom: 20px;

    line-height: 1.6;
    color: #4b4b4c;

    ${media.desktop`
        font-size: 1.6em;
    `}
`;

export const Form = styled.form`
    ${media.tablet`
        display: flex;
    `}
`;

export const Input = styled.input`
    display: block;

    margin-bottom: 12px;
    padding: 8px 16px;

    width: 100%;

    font-size: 1em;

    border: 1px solid #e35d5b;
    border-radius: 4px;

    ${media.tablet`
        margin-right: 20px;
        margin-bottom: 0;
    `}

    ${media.desktop`
        font-size: 1.4em;
    `}
`;

export const SubmitButton = styled.button`
    padding: 8px 16px;

    min-width: 100px;

    font-size: 1.1em;
    color: #ffffff;
    text-transform: uppercase;

    background-color: #e35d5b;

    border: none;
    border-radius: 4px;

    & > svg {
        height: 12px;

        fill: #ffffff;
    }

    ${media.tablet`
        min-width: 140px;
    `}

    ${media.desktop`
        padding: 8px 24px;

        letter-spacing: 1px;
    `}
`;
