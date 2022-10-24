export interface IUserEntity {
  firstName: string;
  lastName: string;
  emailOrNumber: string;
  password: string;
  birthdayDate: string;
  gender: string;
}

export interface IEntityUserObj {
  getFirstName: () => string;
  getLastName: () => string;
  getEmail: () => string;
  getPassword: () => string;
  getBirthdayDate: () => string;
  getGender: () => string;
}

export interface ILoginCredentials {
  email: string;
  password: string;
}
