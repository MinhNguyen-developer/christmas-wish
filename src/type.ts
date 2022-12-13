import {
  Timestamp,
  getFirestore,
  DocumentData,
  collection as firestoreCollection,
} from "firebase/firestore";

export type Wish = {
  id: string;
  createdAt: Timestamp | null;
  name: string;
  wishes: string;
  _ref: string;
};

export const collection = () => {
  return firestoreCollection(getFirestore(), "wishes").withConverter({
    fromFirestore(snapshot): Wish {
      const data = snapshot.data();
      return {
        ...data,
        id: snapshot.id,
        _ref: snapshot.ref.path,
      } as Wish;
    },
    toFirestore(wish: Wish): DocumentData {
      return {
        wish,
      };
    },
  });
};
