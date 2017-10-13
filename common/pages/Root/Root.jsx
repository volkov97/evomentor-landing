import React from 'react';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import Cover from '../../components/Cover/Cover';
import Aims from '../../components/Aims/Aims';
import Poster from '../../components/Poster/Poster';
import Features from '../../components/Features/Features';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import Subscribtion from '../../components/Subscription/Subscription.container';
import Banner from '../../components/Banner/Banner';

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
                <Banner />
                <Subscribtion />
                <SocialMedia />
            </div>
        )
    }
}
