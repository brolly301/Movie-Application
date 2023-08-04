import { useContext } from "react";
import ExtraContext from "../context/extras";

export default function useExtraContext() {
  return useContext(ExtraContext);
}
