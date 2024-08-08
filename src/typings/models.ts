export interface Contact {
  _id: string;
  name: string;
  email?: string;
  phone: string;
  favorite?: boolean;
}

export interface User {
  name: string;
  email: string;
}
