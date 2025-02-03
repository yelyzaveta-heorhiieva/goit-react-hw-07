import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';
 
const persistConfig = {
  key: 'contacts', 
  storage,
  whitelist: 'contacts', 
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});


export const persistor = persistStore(store);
