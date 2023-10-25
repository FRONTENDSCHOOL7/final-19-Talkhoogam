import { atom } from "recoil";

export const emailState = atom({
  key: "email",
  default: "",
});

export const pwState = atom({
  key: "password",
  default: "",
});
