import { IElectronApi } from '../main/preload';

declare global {
  interface Window {
    electron: IElectronApi;
  }
}

export {};
