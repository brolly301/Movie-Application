import { useContext } from "react";
import TicketContext from "../context/tickets";

export default function useTicketContext() {
  return useContext(TicketContext);
}
