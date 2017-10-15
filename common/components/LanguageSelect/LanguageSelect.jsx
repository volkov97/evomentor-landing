import React from 'react';
import Cookies from 'universal-cookie';

import {
  Wrap,
  Select,
} from './LanguageSelect.styled';

export default class LanguageSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeLanguage: props.lang };

    this._onLanguageChange = this._onLanguageChange.bind(this);
  }

  _onLanguageChange(event) {
    const lang = event.target.value;

    this.setState({ activeLanguage: lang });

    new Cookies().set('lang', lang, { path: '/' });

    window.location.reload();
  }

  render() {
    return (
      <Wrap>
        <Select onChange={this._onLanguageChange} value={this.state.activeLanguage}>
          <option value="ru">RU</option>
          <option value="en">EN</option>
          <option value="pl">PL</option>
        </Select>
      </Wrap>
    );
  }
}
