import React from 'react';
import { Link } from 'react-router';

import { Menu } from './Styles'; 

const menu = [
    { name: 'Feed', link: '/' },
    { name: 'Contacts', link: '/condtacts' }
];

export default (props) =>
    <Menu className="menu">
        {menu.map((item, index) =>
            <div className="menu__item" key={index}>
                <Link to={item.link}>{item.name}</Link>
            </div>
        )}
    </Menu>
