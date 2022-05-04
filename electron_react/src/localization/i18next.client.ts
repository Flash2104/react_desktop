import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LocaleHelper } from './locale.helper';

export interface ILanguageChanged {
  language: string;
  namespace: 'translation';
  resource: unknown;
}

i18n
  // .use(Backend)
  // .use(ChainedBackend)
  .use(initReactI18next)
  .init({
    ...LocaleHelper.getClientI18NextOptions(),
  });
window.electron.i18next.onLanguageChange((lng) => {
  console.log('language changed;');
  i18n.changeLanguage(lng, (error, t) => {
    if (error) {
      console.error(error);
    }
  });
});
export default i18n;
