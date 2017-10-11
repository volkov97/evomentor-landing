import React from 'react';
import { injectGlobal } from 'styled-components';

import Cover from '../../components/Cover/Cover';
import Aims from '../../components/Aims/Aims';
import Poster from '../../components/Poster/Poster';
import Features from '../../components/Features/Features';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

import Icon from '../../components/Icon/Icon';

injectGlobal`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;

        font-family: 'Roboto', sans-serif;
    }
`

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <Cover />
                <Aims />
                <Poster />
                <Features />
                <SocialMedia />
            </div>
        )
    }
}
