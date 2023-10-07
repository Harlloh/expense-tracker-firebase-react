import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// always get the database from firestore, it is used for the reference shii
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTrancsation = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo();

  const addTransaction = async ({
    description,
    transactionAmount,
    transactionType,
  }) => {
    //the transactionCollectionRef is used to reference the particular database you want to add the doc to
    //the addDoc is used to add document to a field and it takes 2 argument, the reference and the database you want tp add
    await addDoc(transactionCollectionRef, {
      userID,
      description,
      transactionAmount,
      transactionType,
      createdAt: serverTimestamp(),
    });
  };
  return { addTransaction };
};
