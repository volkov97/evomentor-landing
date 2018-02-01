import styled from 'styled-components';
import media from '../../lib/mixins/media';

export const Wrap = styled.div`
    position: relative;
    min-height: 500px;

    background-image: url('images/banner_mobile.jpg');
    background-size: cover;
    background-position: 50% 100%;

    -webkit-clip-path: polygon(0 15%, 100% 0%, 100% 85%, 0% 100%);
    clip-path: polygon(0 15%, 100% 0%, 100% 85%, 0% 100%);

    ${media.tablet`
        min-height: 550px;
        background-image: url('images/banner_tablet.jpg');
    `}

    ${media.desktop`
        min-height: 600px;
        background-image: url('images/banner_desktop.jpg');
    `}
`;
