import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LocaleHelper } from './locale.helper';

export interface ILanguageChanged {
  language: string;
  namespace: 'translation';
  resource: unknown;
}

i18n.use(initReactI18next);
if (!i18n.isInitialized) {
  i18n.init({
    ...LocaleHelper.getClientI18NextOptions(),
  });
}
window.appApi.i18next.onLanguageChange((message: ILanguageChanged) => {
  if (!i18n.hasResourceBundle(message.language, message.namespace)) {
    i18n.addResourceBundle(
      message.language,
      message.namespace,
      message.resource
    );
  }
  i18n.changeLanguage(message.language, (error, t) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  });
});
export default i18n;
