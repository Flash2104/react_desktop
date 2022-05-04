import i18n from 'i18next';
import Backend from 'i18next-fs-backend';
import { initReactI18next } from 'react-i18next';
import { LocaleHelper } from './locale.helper';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    ...LocaleHelper.GetBaseOptions(),
    interpolation: { escapeValue: false }, // React already does escaping
  });

export default i18n;
