import React from "react";
import { auth, provider } from "../../config/firebase-config";
import { Box, Typography } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import "./style.css";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

export default function Auth() {
  const { isAuth } = useGetUserInfo();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };

    // Convert the authInfo object to a string before storing it in a cookie
    Cookies.set("auth", JSON.stringify(authInfo));
    navigate("/expensetracker");

    // Retrieve and parse the authInfo object from the cookie
    const userAuth = JSON.parse(Cookies.get("auth"));
    console.log(userAuth);
  };
  // if(isAuth){
  //       return <Navigate to='/expensetracker'>
  //     }
  return (
    <Box className="loginPage">
      <Typography variant="paragraph">
        Sign in With Google to Continue
      </Typography>
      <button onClick={signInWithGoogle} className="signInBtn">
        Sign in with Google
      </button>
    </Box>
  );
}
