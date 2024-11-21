import { configureStore } from '@reduxjs/toolkit';
import sliceConfirm from './slices/sliceConfirm';

const store = configureStore({
  reducer: {
    confirm: sliceConfirm
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export default store;