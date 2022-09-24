import { Address } from 'src/app/interfaces/address';

export interface Contact {
  _id?: string;
  firstName: string;
  lastName: string;
  birthday: string;
  color: string;
  email: string;
  phone: string;
  createdAt?: any;
  address: Address;
  notes?: string;
}
