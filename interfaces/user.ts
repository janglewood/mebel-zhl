import auth from "firebase/auth";

export interface User {
  uid: string;
  email: string;
  isAdmin?: boolean;
}

export type ExtendedUser = User & auth.AdditionalUserInfo;
