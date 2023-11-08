import { atom } from "recoil";

export const emailState = atom({
  key: "email",
  default: "",
});

export const pwState = atom({
  key: "password",
  default: "",
});

export const userData = atom({
  key: "userData",
  default: null,
});

export const newToken = atom({
  key: "newToken",
  default: null,
});
