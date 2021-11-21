export type UserType = {
  userId: string,
  userName: string,
  phoneNumber: number,
  nickName: string,
  type: number,
  city: string,
  companyName: string,
  registerTime: string,
  status: number
};

export type UserFilter = {
  city?: any
}
