import React from 'react';

import Menu from './Menu/Menu';

export default class Root extends React.Component {
    render() {
        return (
            <div className="root">
                <Menu />
                <div className="root__content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}   
