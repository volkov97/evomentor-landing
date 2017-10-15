import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import Cookies from 'universal-cookie';

import Aims from '../components/Aims/Aims.translate';
import Poster from '../components/Poster/Poster.translate';
import Subscription from '../components/Subscription/Subscribtion.translate';
import Features from '../components/Features/Features.translate';
import SocialMedia from '../components/SocialMedia/SocialMedia.translate';

const blocks = {
    Aims,
    Poster,
    Subscription,
    Features,
    SocialMedia,
};

export const createDictionaryFromBlocks = (blocks) => {
    const dictionaries = {};

    Object.entries(blocks).forEach(([block, translations]) => {
      Object.entries(translations).forEach(([key, langs]) => {
        Object.entries(langs).forEach(([lang, value]) => {
          if (!dictionaries[lang]) dictionaries[lang] = {};

          dictionaries[lang][`${block}::${key}`] = value;
        });
      });
    });

    return dictionaries;
  };

export default function createDictionary(store, lang = new Cookies().get('lang')) {
    syncTranslationWithStore(store);

    store.dispatch(loadTranslations(createDictionaryFromBlocks(blocks)));
    store.dispatch(setLocale(lang || 'en'));
}
