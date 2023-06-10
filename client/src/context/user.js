import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../APIs/authentication";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [userData, setUserData] = useState({
    user: null,
    email: "",
    password: "",
  });

  useEffect(() => {
    const data = getUser().then((res) => {
      setUserData({
        user: res.email,
      });
    });
  }, [userData.user]);

  const values = {
    userData,
    setUserData,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export default UserContext;
