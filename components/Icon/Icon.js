import React from 'react';

import ArrowDown from './_svg/arrow-down.svg';

class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'arrow-down': { default: <ArrowDown /> },
    };
  }

  render() {
    return this.state[this.props.type][this.props.variant || 'default'];
  }
}

export default Icon;
