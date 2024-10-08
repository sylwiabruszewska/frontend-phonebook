import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  FetchContactsPayload,
  FetchContactsResponse,
  EditContactPayload,
  EditContactResponse,
  AddContactResponse,
  AddContactPayload,
  DeleteContactResponse,
  DeleteContactPayload,
  updateFavoriteStatusResponse,
  updateFavoriteStatusPayload,
} from "@typings/operations";

import { axiosInstance } from "@utils/axiosConfig";

export const fetchContacts = createAsyncThunk<
  FetchContactsResponse,
  FetchContactsPayload
>("contacts/fetchContacts", async ({ page = 1, query = "" }, thunkAPI) => {
  try {
    const res = await axiosInstance.get(
      `/contacts?page=${page}&query=${encodeURIComponent(query)}`
    );

    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const addContact = createAsyncThunk<
  AddContactResponse,
  AddContactPayload
>("contacts/addContact", async (contact, thunkAPI) => {
  try {
    const res = await axiosInstance.post("/contacts", contact);
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const deleteContact = createAsyncThunk<
  DeleteContactResponse,
  DeleteContactPayload
>("contacts/deleteContact", async (contactId, thunkAPI) => {
  try {
    const res = await axiosInstance.delete(`/contacts/${contactId}`);
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const editContact = createAsyncThunk<
  EditContactResponse,
  EditContactPayload
>("contacts/editContact", async ({ contactId, updatedData }, thunkAPI) => {
  try {
    const res = await axiosInstance.patch(
      `/contacts/${contactId}`,
      updatedData
    );

    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const updateFavoriteStatus = createAsyncThunk<
  updateFavoriteStatusResponse,
  updateFavoriteStatusPayload
>(
  "contacts/updateFavoriteStatus",
  async ({ contactId, favorite }, thunkAPI) => {
    try {
      const res = await axiosInstance.patch(`/contacts/${contactId}/favorite`, {
        favorite,
      });

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);
