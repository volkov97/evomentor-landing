import React from 'react';

import Cover from '../../components/Cover/Cover';
import Aims from '../../components/Aims/Aims';
import Poster from '../../components/Poster/Poster';
import Features from '../../components/Features/Features';
import Trainer from '../../components/Trainer/Trainer';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import Subscribtion from '../../components/Subscription/Subscription.container';
import Banner from '../../components/Banner/Banner';

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                <Cover />
                <Aims />
                <Trainer />
                <Poster />
                <Features />
                <Banner />
                <Subscribtion />
                <SocialMedia />
            </div>
        )
    }
}
