import React from 'react';
import { YMInitializer } from 'react-yandex-metrika';

import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

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
        const { children } = this.props;

        return (
            <div>
                <div>{children}</div>
                <YMInitializer accounts={[46277559]} />
            </div>
        )
    }
}
