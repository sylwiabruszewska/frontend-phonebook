import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectContactDetails = state => state.contacts.contactDetails;

export const selectContactDetailsMemoized = createSelector(
  selectContactDetails,
  contactDetails => {
    return contactDetails;
  }
);
