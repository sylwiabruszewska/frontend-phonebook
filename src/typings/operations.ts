import { Contact, User } from "@typings/models";

export interface FetchContactsResponse {
  data: Contact[];
  currentPage: number;
  totalPages: number;
}

export interface FetchContactsPayload {
  page?: number;
  query?: string;
}

export interface EditContactPayload {
  contactId: string;
  updatedData: { name: string; phone: string };
}

export type EditContactResponse = Contact;

export interface LoginResponse {
  data: { user: User };
  token: string;
}

export type AddContactResponse = Contact;

export interface AddContactPayload {
  name: string;
  phone: string;
  email?: string;
  favorite?: boolean;
}
