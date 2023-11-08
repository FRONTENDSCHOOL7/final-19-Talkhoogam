import { atom } from "recoil";

export const title = atom({
  key: "title",
  default: "",
});

export const author = atom({
  key: "author",
  default: "",
});

export const thumbnail = atom({
  key: "thumbnail",
  default: "",
});

export const link = atom({
  key: "link",
  default: "",
});
