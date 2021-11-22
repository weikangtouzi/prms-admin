export type CompanyType = {
  companyId: string;
  companyName: string;
  adminAccount: string | number;
  vipLevel: number;
  logo: string;
  wantCity: any;
  lastLoginTime: string;
  status: number;
  jobNum: number;
  city: string,
  serviceAccount: string
};

export type CompanyFilter = {
  city?: any;
};
