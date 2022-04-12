import {createStore, select, withProps} from '@ngneat/elf';

interface AuthProps {
  user: {id: string} | null;
}

const authStore = createStore({name}, withProps<AuthProps>({user: null}));

export const user$ = authStore.pipe(select(state => state.user));

export function updateUser(user: AuthProps['user']) {
  authStore.update(state => ({
    ...state,
    user,
  }));
}
