import styled from 'styled-components';
import media from '../../lib/mixins/media';

export const Wrap = styled.div`
    padding-top: 20px;

    min-height: 90vh;

    background-color: #ffffff;
    background-image: url('../../static/cover_mobile.jpg');

    background-size: cover;
    background-position: 50% 100%;

    ${media.tablet`
        padding-top: 35px;

        background-image: url('../../static/cover_tablet.jpg');
    `}

    ${media.desktop`
        padding-top: 50px;

        min-height: 100vh;

        background-image: url('../../static/cover_desktop.jpg');
    `}
`;

export const Header = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;
`;

const HeaderImage = styled.img`
    margin-bottom: 20px;
`;

export const Emblem = styled(HeaderImage)`
    position: relative;
    top: 3px;

    margin-right: 12px;

    height: 30px;

    ${media.tablet`
        margin-right: 15px;

        height: 40px;
    `}

    ${media.desktop`
        top: 5px;

        height: 50px;
    `}
`;

export const Logo = styled(HeaderImage)`
    height: 30px;

    ${media.tablet`
        height: 40px;
    `}

    ${media.desktop`
        height: 50px;
    `}
`;

export const ArrowDown = styled.div`
    height: 80px;
    text-align: center;

    @keyframes example {
        0% { transform: translateY(0); }
        50% { transform: translateY(30px); }
        100% { transform: translateY(0); }
    }

    & > svg {
        position: relative;
        top: 0;

        width: 200px;
        height: 50px;

        animation-name: example;
        animation-direction: alternate;
        animation-timing-function: linear;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        animation-duration: 2s;

        will-change: transform;
    }
`;
