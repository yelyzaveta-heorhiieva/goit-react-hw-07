import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import editReducer from './editSlice';

 
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    edit: editReducer,
  },
});