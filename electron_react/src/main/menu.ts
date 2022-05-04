import {
  BrowserWindow,
  Menu,
  MenuItemConstructorOptions,
  shell,
} from 'electron';
import { i18n } from 'i18next';
import { LocaleHelper } from '../localization/locale.helper';
// import { changeLanguageRequest } from './preload';

interface DarwinMenuItemConstructorOptions extends MenuItemConstructorOptions {
  selector?: string;
  submenu?: DarwinMenuItemConstructorOptions[] | Menu;
}

export default class MenuBuilder {
  private mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu(i18next: i18n): Menu {
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.DEBUG_PROD === 'true'
    ) {
      this.setupDevelopmentEnvironment();
    }

    const template =
      process.platform === 'darwin'
        ? this.buildDarwinTemplate(i18next)
        : this.buildDefaultTemplate(i18next);

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }

  setupDevelopmentEnvironment(): void {
    this.mainWindow.webContents.on('context-menu', (_, props) => {
      const { x, y } = props;

      Menu.buildFromTemplate([
        {
          label: 'Inspect element',
          click: () => {
            this.mainWindow.webContents.inspectElement(x, y);
          },
        },
      ]).popup({ window: this.mainWindow });
    });
  }

  buildLanguageMenu = (i18next: i18n): MenuItemConstructorOptions[] => {
    const languageMap = LocaleHelper.getLanguages();
    const languages: MenuItemConstructorOptions[] = [];
    languageMap.forEach((value, key) => {
      if (!value.disabled) {
        languages.push({
          label: `${value.english}-${value.localized}`,
          type: 'radio',
          checked: i18next.language === key,
          click: () => {
            // Solely within the top menu
            i18next.changeLanguage(key);

            // Between renderer > main process
            this.mainWindow.webContents.send('ChangeLanguage-Request', {
              lng: key,
            });
          },
        });
      }
    });
    return languages;
  };

  buildDarwinTemplate(i18next: i18n): MenuItemConstructorOptions[] {
    const subMenuViewDev: MenuItemConstructorOptions = {
      label: i18next.t('menu.view'), // 'View',
      submenu: [
        {
          label: i18next.t('menu.reload'), // 'Reload',
          accelerator: 'Command+R',
          click: () => {
            this.mainWindow.webContents.reload();
          },
        },
        {
          label: i18next.t('menu.fullscreen'), // 'Toggle Full Screen',
          accelerator: 'Ctrl+Command+F',
          click: () => {
            this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
          },
        },
        {
          label: i18next.t('menu.dev-tools'), // 'Toggle Developer Tools',
          accelerator: 'Alt+Command+I',
          click: () => {
            this.mainWindow.webContents.toggleDevTools();
          },
        },
      ],
    };
    const subMenuViewProd: MenuItemConstructorOptions = {
      label: i18next.t('menu.view'), // 'View',
      submenu: [
        {
          label: 'Toggle Full Screen',
          accelerator: 'Ctrl+Command+F',
          click: () => {
            this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
          },
        },
      ],
    };
    const subMenuWindow: DarwinMenuItemConstructorOptions = {
      label: i18next.t('menu.window'), // 'Window',
      submenu: [
        {
          label: i18next.t('menu.window'), // 'Minimize',
          accelerator: 'Command+M',
          selector: 'performMiniaturize:',
        },
        {
          label: i18next.t('menu.close'), // Close
          accelerator: 'Command+W',
          selector: 'performClose:',
        },
        { type: 'separator' },
        { label: 'Bring All to Front', selector: 'arrangeInFront:' },
      ],
    };
    const subMenuHelp: MenuItemConstructorOptions = {
      label: i18next.t('menu.help'), // 'Help',
      submenu: [
        {
          label: i18next.t('menu.support'), // 'Support',
          click() {
            shell.openExternal('https://github.com/electron/electron/issues');
          },
        },
      ],
    };

    const subMenuLanguage: DarwinMenuItemConstructorOptions = {
      label: i18next.t('menu.language'), // 'Edit',
      submenu: this.buildLanguageMenu(i18next),
    };

    const subMenuView =
      process.env.NODE_ENV === 'development' ||
      process.env.DEBUG_PROD === 'true'
        ? subMenuViewDev
        : subMenuViewProd;

    return [subMenuView, subMenuWindow, subMenuLanguage, subMenuHelp];
  }

  buildDefaultTemplate(i18next: i18n) {
    const templateDefault = [
      {
        label: i18next.t('menu.file'), // '&File',
        submenu: [
          // {
          //   label: '&Open',
          //   accelerator: 'Ctrl+O',
          // },
          {
            label: i18next.t('menu.close'), // '&Close',
            accelerator: 'Ctrl+W',
            click: () => {
              this.mainWindow.close();
            },
          },
        ],
      },
      {
        label: i18next.t('menu.view'), // '&View',
        submenu:
          process.env.NODE_ENV === 'development' ||
          process.env.DEBUG_PROD === 'true'
            ? [
                {
                  label: i18next.t('menu.reload'), // '&Reload',
                  accelerator: 'Ctrl+R',
                  click: () => {
                    this.mainWindow.webContents.reload();
                  },
                },
                {
                  label: i18next.t('menu.fullscreen'), // 'Toggle &Full Screen',
                  accelerator: 'F11',
                  click: () => {
                    this.mainWindow.setFullScreen(
                      !this.mainWindow.isFullScreen()
                    );
                  },
                },
                {
                  label: i18next.t('menu.dev-tools'), // 'Toggle &Developer Tools',
                  accelerator: 'Alt+Ctrl+I',
                  click: () => {
                    this.mainWindow.webContents.toggleDevTools();
                  },
                },
              ]
            : [
                {
                  label: i18next.t('menu.fullscreen'), // 'Toggle &Full Screen',
                  accelerator: 'F11',
                  click: () => {
                    this.mainWindow.setFullScreen(
                      !this.mainWindow.isFullScreen()
                    );
                  },
                },
              ],
      },
      {
        label: i18next.t('menu.help'), // 'Help',
        submenu: [
          {
            label: i18next.t('menu.support'), // 'Support',
            click() {
              shell.openExternal('https://github.com/electron/electron/issues');
            },
          },
        ],
      },
      {
        label: i18next.t('menu.language'),
        submenu: this.buildLanguageMenu(i18next),
      },
    ];

    return templateDefault;
  }
}
