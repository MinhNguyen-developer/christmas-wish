import { atom } from "recoil";
import { collection, Wish } from "./type";
import { onSnapshot, query, where } from "firebase/firestore";

export const getTasks = atom<Wish[]>({
  key: "get.tasks",
  default: [],
  effects: [
    ({ setSelf }) => {
      onSnapshot(
        query(collection(), where("isAccepted", "==", false)),
        (onSnapshot) => {
          setSelf(
            onSnapshot.docs.map((doc) => {
              return doc.data();
            })
          );
        }
      );
    },
  ],
});

export const audioState = atom<boolean>({
  key: "audio.state",
  default: false,
});
