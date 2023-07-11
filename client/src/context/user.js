import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../APIs/authentication";
import { getBookings } from "../APIs/profile";

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

  const [bookingDetails, setBookingDetails] = useState({
    startTime: [],
    startDate: [],
    movieID: [],
  });

  useEffect(() => {
    const data = getBookings().then((res) => {
      setBookingDetails(res);
    });
  }, [userData.user, userData.loyaltyPoints]);

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

  const values = {
    userData,
    setUserData,
    bookingDetails,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export default UserContext;
