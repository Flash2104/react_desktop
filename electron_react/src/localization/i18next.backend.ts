import i18n from 'i18next';
import Backend from 'i18next-fs-backend';
import { LocaleHelper } from './locale.helper';

i18n.use(Backend).init({
  ...LocaleHelper.GetBaseOptions(),
});

export default i18n;
