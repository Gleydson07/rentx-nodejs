export interface ICreateUsersDTO {
  name: string;
  password: string;
  email: string;
  driver_license: string;
}

export interface IGetUserDTO {
  name: string;
  email: string;
  driver_license: string;
}
