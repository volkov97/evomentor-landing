import { i18nActions, Loc } from 'redux-react-i18n'

import contacts from '../../common/pages/visitor/Contacts/Contacts.dictionary'

const dictionaries = Object.assign(
    {},
    contacts
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







