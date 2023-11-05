import { store } from '@/store';
import { setUser } from '@/store/slices/userSlice';
import { useLayoutEffect } from 'react';

export function useIsLoggedUser() {
  async function init() {
    const user = localStorage.getItem('user');

    if (!user) {
      return;
    }

    store.dispatch(setUser(JSON.parse(user)));
  }

  useLayoutEffect(() => {
    void init();
  }, []);
}
