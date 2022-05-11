import { inferAsyncReturnType } from '@trpc/server';
import { IpcMainInvokeEvent } from 'electron';
import { IpcRpcRequest } from '../trpc-internals';

export interface IpcContextOpts {
  req: IpcRpcRequest;
  event: IpcMainInvokeEvent;
}

// log.info('DB URL', dbUrl);

// export const prisma = new PrismaClient({
//   log: ['info', 'warn', 'error'],
//   datasources: {
//     db: {
//       url: dbUrl,
//     },
//   },
//   // see https://github.com/prisma/prisma/discussions/5200
//   __internal: {
//     engine: {
//       binaryPath: qePath,
//     },
//   },
// });

// The app's context - is generated for each incoming request
export async function createContext(opts: IpcContextOpts) {
  return {
    opts,
    // ToDo: prisma
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
