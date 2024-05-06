import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { baseApi } from './base-query';
import employeeReducer from '../domain/employees/slices/employeeSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['employee'],
};

const rootReducer = combineReducers({
  employee: employeeReducer,
});

const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware({ serializableCheck: false })
    .concat(baseApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
