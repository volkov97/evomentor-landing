import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';

const dictionaries = Object.assign(
    {},
)

export default function createDictionary(store) {
    syncTranslationWithStore(store);

    store.dispatch(loadTranslations(dictionaries));
    store.dispatch(setLocale('en'));
}
