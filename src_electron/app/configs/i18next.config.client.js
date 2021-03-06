const i18n = require('i18next');

const reactI18nextModule = require('react-i18next').reactI18nextModule;
const config = require('./app.config');

const i18nextOptions = {
  interpolation: {
    escapeValue: false
  },
  saveMissing: true,
  lng: 'en',
  fallbackLng: config.fallbackLng,
  whitelist: config.languages,
  react: {
    wait: false
  }
};

i18n
  .use(reactI18nextModule);

// initialize if not already initialized
if (!i18n.isInitialized) {
  i18n
    .init(i18nextOptions);
}

module.exports = i18n;