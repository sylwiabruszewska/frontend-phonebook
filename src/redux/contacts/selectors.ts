import { RootState } from "@redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state: RootState) => state.contacts.contacts;
export const selectCurrentPage = (state: RootState) =>
  state.contacts.currentPage;
export const selectTotalPages = (state: RootState) => state.contacts.totalPages;
export const selectFilter = (state: RootState) => state.contacts.filter;
export const selectContactDetails = (state: RootState) =>
  state.contacts.contactDetails;

export const selectIsLoading = (state: RootState) => state.contacts.isLoading;
export const selectError = (state: RootState) => state.contacts.error;

export const selectContactDetailsMemoized = createSelector(
  selectContactDetails,
  (contactDetails) => {
    return contactDetails;
  }
);
