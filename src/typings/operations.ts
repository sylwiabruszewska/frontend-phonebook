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
  updatedData: Contact;
}

export type EditContactResponse = Contact;

export interface LoginResponse {
  data: { user: User };
  token: string;
}
