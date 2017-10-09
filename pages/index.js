import React from 'react';
import Head from 'next/head';
import { injectGlobal } from 'styled-components';

import Cover from '../components/Cover/Cover';

injectGlobal`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
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
                </Head>

                <Cover />
            </div>
        )
    }
}
