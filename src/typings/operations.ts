import { Contact, User } from "@typings/models";

// CONTACTS
export interface FetchContactsResponse {
  data: Contact[];
  currentPage: number;
  totalPages: number;
}
export interface FetchContactsPayload {
  page?: number;
  query?: string;
}

export type EditContactResponse = { data: Contact };
export interface EditContactPayload {
  contactId: string;
  updatedData: { name: string; phone: string };
}

export type updateFavoriteStatusResponse = { data: Contact };
export interface updateFavoriteStatusPayload {
  contactId: string;
  favorite: boolean;
}

export type AddContactResponse = { data: Contact };
export interface AddContactPayload {
  name: string;
  phone: string;
  email?: string;
  favorite?: boolean;
}

export type DeleteContactResponse = {
  data: { id: string };
};

export type DeleteContactPayload = string;

// AUTH
export interface LoginResponse {
  data: { user: User };
  token: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export type RegisterResponse = {
  data: {
    name: string;
    email: string;
  };
};
export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}
