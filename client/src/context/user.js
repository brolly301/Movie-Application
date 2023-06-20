import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../APIs/authentication";

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [userData, setUserData] = useState({
    user: null,
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    loyaltyPoints: "",
  });

  useEffect(() => {
    const data = getUser().then((res) => {
      setUserData({
        user: res.email,
        firstName: res.firstName,
        surname: res.surname,
        email: res.email,
        phoneNumber: res.phoneNumber,
        loyaltyPoints: res.loyaltyPoints,
      });
    });
  }, [userData.user]);

  console.log(userData);

  const values = {
    userData,
    setUserData,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export default UserContext;
