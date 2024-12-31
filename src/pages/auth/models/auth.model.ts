export type RegisterModel = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginModel = {
  email: string;
  password: string;
};
