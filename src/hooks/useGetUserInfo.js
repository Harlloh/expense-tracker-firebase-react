import Cookies from "js-cookie";

export const useGetUserInfo = () => {
  const { userID, name, profilePhoto, isAuth } = JSON.parse(
    Cookies.get("auth")
  );
  return { userID, name, profilePhoto, isAuth };
};
