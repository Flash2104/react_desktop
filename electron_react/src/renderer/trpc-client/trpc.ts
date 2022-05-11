import { createReactQueryHooks } from '@trpc/react';
import { AppRouter } from '../../main/trpc-server/router/router';

export const trpc = createReactQueryHooks<AppRouter>();
