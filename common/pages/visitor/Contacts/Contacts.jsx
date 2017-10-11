import React from 'react';
import { Loc } from 'redux-react-i18n'

export default class Feed extends React.Component {

    render() {
        return (
            <div className="Feed">
                <div>
                    <Loc locKey="contacts_here"/>
                    <br/>
                    <Loc locKey="contacts_count" number={1}/>
                </div>
            </div>
        );
    }

}
