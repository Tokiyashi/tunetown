'use client';
import { store } from '@/store/index';
import { Provider } from 'react-redux';

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
