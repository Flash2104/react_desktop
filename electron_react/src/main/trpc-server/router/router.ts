import { githubAppRouter } from '../endpoints/github';
import { helloAppRouter } from '../endpoints/hello';
import { createRouter } from './create-router';

export const routers = () =>
  createRouter()
    .merge('hello.', helloAppRouter)
    .merge('github.', githubAppRouter);

export type AppRouter = ReturnType<typeof routers>;
