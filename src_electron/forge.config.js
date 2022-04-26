module.exports = {
  packagerConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-wix",
      config: {
        ui: {
          "chooseDirectory": true
        }
      }
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        mainConfig: "./webpack.main.config.js",
        renderer: {
          config: "./webpack.renderer.config.js",
          devServer: {
            stats: "verbose",
          },
          devContentSecurityPolicy:
            "default-src 'self' 'unsafe-inline' data:; script-src 'self' 'unsafe-eval' 'unsafe-inline' data:",
          entryPoints: [
            {
              html: "./public/index.html",
              js: "./app/src/index.tsx",
              name: "main_window",
              preload: {
                js: "./app/electron/preload.ts",
              }
            },
          ],
        },
      },
    ],
  ],
};
