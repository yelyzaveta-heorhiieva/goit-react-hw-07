import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase().trim()));
});