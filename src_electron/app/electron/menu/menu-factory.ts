import { BrowserWindow } from "electron";
import { Menu } from "electron";
import { buildDarwinMenu } from './darwin-menu';
import { buildOtherMenu } from './other-menu';

const config = require("../configs/app.config");
const i18n = require("../configs/i18next.config");

// const platform = process.platform;

export class MenuFactoryService {
  constructor() {
  }

  buildMenu(app: Electron.App, mainWindow: BrowserWindow) {
    if (config.platform === "darwin") {
        const menu = Menu.buildFromTemplate(buildDarwinMenu(app, mainWindow, i18n));

      Menu.setApplicationMenu(menu);
    } else {
      const menu = Menu.buildFromTemplate(buildOtherMenu(app, mainWindow, i18n));
      mainWindow.setMenu(menu);
    }
  }
}

module.exports = new MenuFactoryService();
