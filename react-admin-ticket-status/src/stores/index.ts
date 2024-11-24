import { configureStore } from '@reduxjs/toolkit';
import sliceConfirm from './slices/sliceConfirm';
import sliceTabs from "./slices/sliceTabs";

const store = configureStore({
  reducer: {
    confirm: sliceConfirm,
    tab: sliceTabs
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export default store;