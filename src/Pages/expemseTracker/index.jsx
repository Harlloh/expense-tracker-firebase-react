import { Box, Typography } from "@mui/material";
import { useAddTrancsation } from "../../hooks/useAddTransaction";
import { useState } from "react";
import { useGetTransaction } from "../../hooks/useGetTransactions";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import "./style.css";
import { signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase-config";

export default function ExpenseTracker() {
  const navigate = useNavigate();

  const { name, profilePhoto } = useGetUserInfo();
  const { addTransaction } = useAddTrancsation();
  const { transactions, transactionTotals } = useGetTransaction();

  const { balance, income, expense } = transactionTotals;

  const [description, setDescription] = useState("");
  const [transactionAmount, settransactionAmount] = useState(0);
  const [transactionType, settransactionType] = useState("expense");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //the form datas are added from this component and are added to the database using the addDoc function in the useAddTransaction hook
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });
  };

  const handleUserSignOut = async () => {
    try {
      await signOut(auth);
      Cookies.remove();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box className="expenseTracker">
        <Box className="container">
          <Typography variant="h3">{name}'s Expense Tracker</Typography>
          <Box className="balance">
            <Typography variant="h3">Your Balance</Typography>
            {balance >= 0 ? (
              <Typography variant="h2">${balance.toLocaleString()}</Typography>
            ) : (
              <Typography variant="h2">
                -${(balance * -1).toLocaleString()}
              </Typography>
            )}
          </Box>
          <Box className="summary">
            <Box className="income">
              <Typography variant="h4">Income</Typography>
              <Typography variant="subtitle1">
                ${income.toLocaleString()}
              </Typography>
            </Box>
            <Box className="expenses">
              <Typography variant="h4">Expenses</Typography>
              <Typography variant="subtitle1">
                ${expense.toLocaleString()}
              </Typography>
            </Box>
          </Box>
          <form className="transaction" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Description"
              required
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              name="transactionAmount"
              required
              value={transactionAmount.toLocaleString()}
              onChange={(e) => settransactionAmount(e.target.value)}
            />

            <input
              type="radio"
              id="expense"
              // name={transactionType}
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => settransactionType(e.target.value)}
            />
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              id="income"
              name="income"
              value="income"
              checked={transactionType === "income"}
              onChange={(e) => settransactionType(e.target.value)}
            />
            <label htmlFor="income"> Income</label>

            <button type="submit">Add Transaction</button>
          </form>
        </Box>
        {profilePhoto && (
          <div className="profile">
            <img src={profilePhoto} className="profile-photo" alt="" />
            <button className="sign-out-button" onClick={handleUserSignOut}>
              sign Out
            </button>
          </div>
        )}
      </Box>
      <Box className="transactions">
        <Typography variant="h3">Transactions</Typography>
        <ul>
          {transactions.map((transaction, index) => {
            const { description, transactionAmount, transactionType } =
              transaction;
            console.log(transactionAmount);
            console.log(transactionAmount.toLocaleString());
            return (
              <li key={index}>
                <h4>{description}</h4>
                <p>
                  ${transactionAmount.toLocaleString()}.
                  <label
                    style={{
                      color: transactionType === "expense" ? "red" : "green",
                    }}
                  >
                    {transactionType}
                  </label>
                </p>
              </li>
            );
          })}
        </ul>
      </Box>
    </>
  );
}
