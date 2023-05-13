export interface Package {
  id: number;
  name: string;
  amount: number;
  packageUsed: string;
  contractId: number;
  packageTypeEnum: PackageTypeEnum;
}

enum PackageTypeEnum {
  Type1,
  Type2,
  Type3,
}
