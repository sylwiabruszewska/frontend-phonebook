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

export type EditContactResponse = Contact;
export interface EditContactPayload {
  contactId: string;
  updatedData: { name: string; phone: string };
}

export type AddContactResponse = Contact;
export interface AddContactPayload {
  name: string;
  phone: string;
  email?: string;
  favorite?: boolean;
}

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
