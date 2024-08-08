import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";
import { Contact } from "@typings/models";
import { ContactProps } from "@typings/components";

interface ContactsState {
  contacts: Contact[];
  currentPage: number;
  totalPages: number;
  contactDetails: ContactProps | null;
  filter: string;
  isLoading: boolean;
  error: void | null;
}

const initialState: ContactsState = {
  contacts: [],
  currentPage: 1,
  totalPages: 1,
  contactDetails: null,
  filter: "",
  isLoading: false,
  error: null,
} as ContactsState;

const handlePending = (state: ContactsState) => {
  state.isLoading = true;
};

const handleRejected = (state: ContactsState, action: PayloadAction) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingAction = (action: PayloadAction) => {
  return action.type.endsWith("/pending");
};

const isRejectAction = (action: PayloadAction) => {
  return action.type.endsWith("/rejected");
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    setContactDetails: (state, action) => {
      state.contactDetails = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload.data;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload.data);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          (contact) => contact._id === action.payload.data.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const editedContact = action.payload.data;

        const index = state.contacts.findIndex(
          (contact) => contact._id === editedContact._id
        );

        if (index !== -1) {
          state.contacts[index].name = editedContact.name;
          state.contacts[index].phone = editedContact.phone;
        }
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const { setContactDetails, setCurrentPage, setFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export type { ContactsState };
