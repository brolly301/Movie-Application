import UserContext from "../context/user";
import { useContext } from "react";

export default function useUserContext() {
  return useContext(UserContext);
}
