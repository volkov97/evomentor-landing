import React from 'react';

import LinkedInIcon from './linkedin.svg';

export default class Feed extends React.Component {

    componentDidMount() {
        this.props.projects.length || this.props.handleLoadingProjects();
    }

    render() {
        return (
            <div className="Feed">
                <div>Feed via React!</div>
                <div className="projects">
                    {this.props.projects && this.props.projects.data.map((project, index) =>
                        <div className="project" key={index}>
                            <div className="project__name">{project.name}</div>
                            <div className="project__description">{project.description}</div>
                        </div>
                    )}
                </div>
                <LinkedInIcon />
            </div>
        );
    }

}
