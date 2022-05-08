import { IElectronApi } from '../main/preload';

declare global {
  interface Window {
    appApi: IElectronApi;
  }
}

export {};
