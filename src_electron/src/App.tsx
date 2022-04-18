import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props: any) {
  const [appInfo, setAppInfo] = useState({ appName: null, appVersion: null });
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  // useEffect(() => {
  //   const { ipcRenderer } = window;
  //   ipcRenderer?.send(channels.APP_INFO);
  //   ipcRenderer?.on(channels.APP_INFO, (_: any, arg: any) => {
  //     ipcRenderer?.removeAllListeners(channels.APP_INFO);
  //     const { appName, appVersion } = arg;
  //     setAppInfo({ appName, appVersion });
  //   });
  // }, []);

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
        <p>
          Env variable "REACT_APP_BACKEND_URL": <code>{baseUrl}</code>
        </p>
      </header>
    </div>
  );
}

export default App;
