import { BrowserWindow, Menu, MenuItem } from "electron";

export function buildOtherMenu(
  app: Electron.App,
  mainWindow: BrowserWindow,
  i18n: any,
): MenuItem[] {
  let menu: MenuItem[] = [
    {
      label: i18n.t("&File"),
      submenu: {
        items: [
          {
            label: i18n.t("&Quit"),
            accelerator: "Ctrl+Q",
            click: function () {
              app.quit();
            },
          } as unknown,
        ],
      },
    } as MenuItem,
    {
      label: "View",
      submenu: {
        items: [
          {
            label: i18n.t("Reload"),
            accelerator: "Command+R",
            click: function (item: any, focusedWindow: BrowserWindow) {
              focusedWindow.reload();
            },
          },
          {
            label: i18n.t("Full Screen"),
            accelerator: "Ctrl+Command+F",
            click: function (item: any, focusedWindow: BrowserWindow) {
              focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
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
            click: function (item: any, focusedWindow: BrowserWindow) {
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
          } as unknown,
        ],
      } as Menu,
    } as MenuItem,
  ];

  return menu;
}
