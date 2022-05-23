import { atom } from "recoil";






const selected = atom({
  key: 'selected',
  default: [],
});

const selected_q = atom({
  key: 'selected_q',
  default: [],
});
export {  selected,selected_q };
