import React from 'react';
import { Link } from 'react-router';

const menu = [
    { name: 'Feed', link: '/' },
    { name: 'Contacts', link: '/contacts' }
];

export default (props) =>
    <div className="menu">
        {menu.map((item, index) =>
            <div className="menu__item" key={index}>
                <Link to={item.link}>{item.name}</Link>
            </div>
        )}
    </div>
