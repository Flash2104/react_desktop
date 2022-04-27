import { BrowserWindow, Menu, MenuItem } from "electron";

const config = require("../configs/app.config");

export function buildDarwinMenu(
  app: Electron.App,
  mainWindow: BrowserWindow,
  i18n: any,
): MenuItem[] {
  let menu: MenuItem[] = [
    {
      label: i18n.t("PhraseApp i18n"),
      submenu: {
        items: [
          {
            label: i18n.t("About PhraseApp i18n"),
            role: "about",
          } as MenuItem,
          {
            type: "separator",
          },
          {
            label: i18n.t("Hide App"),
            accelerator: "Command+H",
            role: "hide",
          },
          {
            label: i18n.t("Hide Others"),
            accelerator: "Command+Shift+H",
            role: "hideothers",
          },
          {
            label: i18n.t("Show All"),
            role: "unhide",
          },
          {
            type: "separator",
          },
          {
            label: i18n.t("Quit"),
            accelerator: "Command+Q",
            click: () => {
              app.quit();
            },
          },
        ],
      },
    } as MenuItem,
    {
      label: i18n.t("View"),
      submenu: {
        items: [
          {
            label: i18n.t("Reload"),
            accelerator: "Command+R",
            click: (item: any, focusedWindow: BrowserWindow) => {
              if (focusedWindow) {
                focusedWindow.reload();
              }
            },
          },
          {
            label: i18n.t("Full Screen"),
            accelerator: "Ctrl+Command+F",
            click: (item: any, focusedWindow: BrowserWindow) => {
              if (focusedWindow) {
                focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
              }
            },
          },
          {
            label: i18n.t("Minimize"),
            accelerator: "Command+M",
            role: "minimize",
          },
          {
            type: "separator",
          },
          {
            label: i18n.t("Toggle Developer Tools"),
            accelerator: "Alt+Command+I",
            click: (item: any, focusedWindow: BrowserWindow) => {
              focusedWindow.webContents.toggleDevTools();
            },
          },
        ] as unknown,
      } as Menu,
    } as MenuItem,
    {
      label: i18n.t("Help"),
      submenu: {
        items: [
          {
            label: i18n.t("About App"),
            click: function (item: any, focusedWindow: BrowserWindow) {
              if (focusedWindow) {
              }
            },
          },
        ] as unknown,
      } as Menu,
    } as MenuItem,
  ];

  const languageMenu = config.languages.map((locKey: string) => {
    return {
      label: i18n.t(locKey),
      type: "radio",
      checked: i18n.language === locKey,
      click: () => {
        i18n.changeLanguage(locKey);
      },
    };
  });

  menu.push({
    label: i18n.t("Language"),
    submenu: languageMenu,
  } as MenuItem);

  return menu;
}
