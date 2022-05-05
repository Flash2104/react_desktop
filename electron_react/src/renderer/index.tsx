// import { ipcRenderer } from 'electron';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider, useSSR } from 'react-i18next';
import { HashRouter } from 'react-router-dom';
import i18n from '../localization/i18next.client';
import App from './App';

// const initialI18nStore = ipcRenderer.sendSync('get-initial-translation');

// ipcRenderer.on('language-changed', (event, message: ILanguageChanged) => {
//   if (!i18n.hasResourceBundle(message.language, message.namespace)) {
//     i18n.addResourceBundle(
//       message.language,
//       message.namespace,
//       message.resource
//     );
//   }

//   i18n.changeLanguage(message.language);
// });

const container = document.getElementById('root');
if (container != null) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      {/* <Provider store={store}> */}
      <I18nextProvider i18n={i18n}>
        <HashRouter>
          <App />
        </HashRouter>
      </I18nextProvider>
      {/* </Provider> */}
    </React.StrictMode>
  );
}

// calling IPC exposed from preload script
// window.electron.ipcRenderer.once('ipc-example', (arg) => {
//   // eslint-disable-next-line no-console
//   console.log(arg);
// });
// window.electron.ipcRenderer.myPing();
