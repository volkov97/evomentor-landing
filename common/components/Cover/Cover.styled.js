import styled from 'styled-components';
import media from '../../lib/mixins/media';

export const Wrap = styled.section`
    position: relative;

    min-height: 85vh;

    background-color: #ffffff;
    background-image: url('../../images/cover_mobile.jpg');

    background-size: cover;
    background-position: 50% 100%;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 150px;

        background:
            linear-gradient(to bottom right, transparent 75%, #ffffff 50%),
            linear-gradient(to bottom left, transparent 75%, #ffffff 50%);
    }

    ${media.tablet`
        background-image: url('../../images/cover_tablet.jpg');
    `}

    ${media.desktop`
        min-height: 95vh;

        background-attachment: fixed;
        background-image: url('../../images/cover_desktop.jpg');
    `}
`;

export const Header = styled.div`
    display: flex;
    padding: 20px 0 25px;

    align-items: center;
    justify-content: center;

    background-color: rgba(227, 93, 91, 0.8);
`;

const HeaderImage = styled.img`
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
