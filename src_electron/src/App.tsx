import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { channels } from './shared/channels';
// import { channels } from '../src/shared/constants';
// const { ipcRenderer } = window.require('electron');

function App(props: any) {
  const [appInfo, setAppInfo] = useState({ appName: null, appVersion: null });

  useEffect(() => {
    const { ipcRenderer } = window;
    ipcRenderer?.send(channels.APP_INFO);
    ipcRenderer?.on(channels.APP_INFO, (_: any, arg: any) => {
      ipcRenderer?.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
      setAppInfo({ appName, appVersion });
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {
          appInfo?.appVersion != null &&        
          <p>
          (App version: {appInfo.appVersion})
        </p>
        }        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
