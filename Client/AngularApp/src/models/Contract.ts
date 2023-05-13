import { Package } from './Package';

export interface Contract {
  id: number;
  customerId: number;
  name: string;
  number: string;
  contractTypeId: number;
  contractTypes: ContractTypes;
  packages: Package[];
}

export enum ContractTypes {
  Type1,
  Type2,
  Type3,
}
