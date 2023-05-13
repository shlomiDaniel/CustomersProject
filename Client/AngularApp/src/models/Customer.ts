import { Contract } from './Contract';

export interface Customer {
  id: number;
  identityNumber: string;
  firstName: string;
  lastName: string;
  city: string;
  street: string;
  houseNumber: number;
  zipCode: string;
  contracts: Contract[];
}
