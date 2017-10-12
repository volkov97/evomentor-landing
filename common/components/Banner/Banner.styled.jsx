import styled from 'styled-components';
import media from '../../lib/mixins/media';

export const Wrap = styled.div`
    position: relative;
    min-height: 500px;

    background-image: url('images/banner_mobile.jpg');
    background-size: cover;
    background-position: 50% 100%;

    &:before, &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;

        background: linear-gradient(to top left, transparent 50%, #fff 50%);
    }

    &:after {
        top: inherit;
        bottom: 0;

        background: linear-gradient(to bottom right, transparent 50%, #fff 50%);
    }

    ${media.tablet`
        min-height: 550px;
        background-image: url('images/banner_tablet.jpg');
    `}

    ${media.desktop`
        min-height: 600px;
        background-image: url('images/banner_desktop.jpg');
    `}
`;
