import React from 'react';

import {
    RootWrapper
} from './Styles';

import Menu from './Menu/Menu';

export default class Root extends React.Component {
    render() {
        return (
            <RootWrapper>
                <Menu />
                <div>
                    {this.props.children}
                </div>
            </RootWrapper>
        )
    }
}   
