import { i18nActions, Loc } from 'redux-react-i18n'

const dictionaries = Object.assign(
    {},
)

const languages = [
    { code: 'ru-RU', name: 'Русский' },
    { code: 'en-US', name: 'English (USA)' }
]

export default function createDictionary(store) {
    store.dispatch( i18nActions.setDictionaries( dictionaries ) )

    store.dispatch( i18nActions.setLanguages( languages ) )
    store.dispatch( i18nActions.setCurrentLanguage( 'ru-RU' ) )
}







