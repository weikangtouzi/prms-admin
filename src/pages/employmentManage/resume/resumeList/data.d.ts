export type resumeType = {
  resumeId: string;
  userAccount: string;
  userName:  number;
  expectSalary: number[];
  expectCity: string;
  updateTime: string;
  publishTime: string;
  vas: string[], //增值服务
  expectTitle: string,
  status: number
};

export type resumeRecordType = {
  recordId: string,
  userName: string,
  companyName: string,
  queryTime: string,
  inviteTime: string,
  interviewTime: string,
  markTime: string,
  starTime: string,
  type: number
}

