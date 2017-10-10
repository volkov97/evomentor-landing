import React from 'react';
import Head from 'next/head';
import { injectGlobal } from 'styled-components';

import Cover from '../components/Cover/Cover';
import Aims from '../components/Aims/Aims';
import Poster from '../components/Poster/Poster';
import Features from '../components/Features/Features';
import SocialMedia from '../components/SocialMedia/SocialMedia';

import Icon from '../components/Icon/Icon';

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
                <Head>
                    <title>Evomentor Promo</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />

                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&amp;subset=cyrillic" rel="stylesheet" />
                </Head>

                <Cover />
                <Aims />
                <Poster />
                <Features />
                <SocialMedia />
            </div>
        )
    }
}
