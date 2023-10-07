import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";
import { useState } from "react";
import { useEffect } from "react";

export const useGetTransaction = () => {
  const { userID } = useGetUserInfo();
  const [transactions, settransactions] = useState([]);
  const [transactionTotals, settransactionTotals] = useState({
    balance: 0.0,
    income: 0.0,
    expense: 0.0,
  });
  const transactionCollectionRef = collection(db, "transactions");

  const getTransaction = async () => {
    let unsubscribe;
    try {
      const queryTransactions = query(
        transactionCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );

      unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = [];
        let totalIncome = 0;
        let totalExpense = 0;

        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });
          if (data.transactionType === "expense") {
            totalExpense += Number(data.transactionAmount);
          } else {
            totalIncome += Number(data.transactionAmount);
          }
        });
        settransactions(docs);
        let balance = totalIncome - totalExpense;
        settransactionTotals({
          balance,
          expense: totalExpense,
          income: totalIncome,
        });
      });
    } catch (err) {
      console.log(err);
    }
    return () => unsubscribe();
  };
  useEffect(() => {
    getTransaction();
  }, []);

  return { transactions, transactionTotals };
};
