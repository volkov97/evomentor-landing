import styled from 'styled-components';

export const Wrap = styled.div`
    padding-top: 50px;

    min-height: 100vh;

    background-color: #ffffff;
    background-image: url('../../static/cover.jpg');
    background-size: cover;
    background-position: 50% 100%;
`;

export const Header = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;
`;

const HeaderImage = styled.img`
    margin-bottom: 20px;
    height: 50px;
`;

export const Emblem = styled(HeaderImage)`
    position: relative;
    top: 5px;

    margin-right: 20px;
`;

export const Logo = styled(HeaderImage)`
    height: 40px;
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
