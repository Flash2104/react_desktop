## Available Scripts

In the project directory, you can run:

### `npm run electron:start`

Automatically runs the Electron app in the development mode with Chromium dev tools (port :3000 should be free).
(You can open [http://localhost:3000](http://localhost:3000) to view only React app in the browser.)

The app will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build-win/build-mac/build-linux`

Builds the app for production to the `dist` folder.\
Creates the Windows/macOS/Linux installers.

App is ready to be distributed!

See the section about [deployment](https://www.electronjs.org/ru/docs/latest/tutorial/application-distribution) for more information.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn more Electron, check out the [Electron documentation](https://www.electronjs.org/docs/latest/).

### App architecture and configuration
Secure electron template: https://github.com/reZach/secure-electron-template (not fully clonned, manually configues by ideas);

i18next with (https://github.com/reZach/i18next-electron-fs-backend for backend): https://www.i18next.com/;

Secure electron store (for saving configs): https://github.com/reZach/secure-electron-store/;

License keys offline check: https://github.com/reZach/secure-electron-license-keys