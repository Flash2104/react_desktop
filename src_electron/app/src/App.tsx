import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

function App(props: any) {
  const [appInfo, setAppInfo] = useState({ appName: null, appVersion: null });
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const { ipcRenderer } = window;
  //   ipcRenderer?.send(channels.APP_INFO);
  //   ipcRenderer?.on(channels.APP_INFO, (_: any, arg: any) => {
  //     ipcRenderer?.removeAllListeners(channels.APP_INFO);
  //     const { appName, appVersion } = arg;
  //     setAppInfo({ appName, appVersion });
  //   });
  // }, []);

  const incr = () => {
      const incr = count + 1;
      setCount(incr);
  }

  const reset = () => setCount(0);

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
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Тест-дебаг инкремента
        </Typography>
        <Typography variant="body2">
          Число 
        </Typography>
        <Typography variant="body1">
          {count}
        </Typography>
      </CardContent>
      <CardActions>
        <div className='Increment-buttons'>
        <Button variant="outlined" onClick={incr} size="small">Count++</Button>
        <Button variant="outlined" onClick={reset} size="small">Reset</Button>
        </div>

      </CardActions>
    </Card>
      </header>
    </div>
  );
}

export default App;
