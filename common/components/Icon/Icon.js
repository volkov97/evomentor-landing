import React from 'react';

import Vkontakte from './_svg/vk.svg';
import Facebook from './_svg/fb.svg';
import Instagram from './_svg/instagram-logo.svg';
import ArrowDown from './_svg/arrow-down.svg';
import Question from './_svg/question.svg';
import Design from './_svg/design.svg';
import Favourites from './_svg/favourites.svg';
import Profile from './_svg/profile.svg';
import Schedule from './_svg/schedule.svg';
import Search from './_svg/search1.svg';
import Stars from './_svg/stars.svg';
import Trainer from './_svg/trainer.svg';
import Loader from './_svg/three-dots.svg';
import Success from './_svg/success.svg';
import Account from './_svg/account.svg';
import Clients from './_svg/clients.svg';
import Library from './_svg/library.svg';
import Analytics from './_svg/analitics.svg';
import Chat from './_svg/chat.svg';

class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'arrow-down': { default: <ArrowDown /> },
      'question': { default: <Question /> },
      'vk': { default: <Vkontakte /> },
      'fb': { default: <Facebook /> },
      'instagram': { default: <Instagram /> },
      'design': { default: <Design /> },
      'favourites': { default: <Favourites /> },
      'profile': { default: <Profile /> },
      'schedule': { default: <Schedule /> },
      'search': { default: <Search /> },
      'stars': { default: <Stars /> },
      'trainer': { default: <Trainer /> },
      'loader': { default: <Loader /> },
      'success': { default: <Success /> },
      'account': { default: <Account /> },
      'clients': { default: <Clients /> },
      'library': { default: <Library /> },
      'analitics': { default: <Analytics /> },
      'chat': { default: <Chat /> },
    };
  }

  render() {
    return this.state[this.props.type][this.props.variant || 'default'];
  }
}

export default Icon;
