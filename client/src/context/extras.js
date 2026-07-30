import { createContext, useState } from "react";

const ExtraContext = createContext();

export function ExtraProvider({ children }) {
  const [extraData, setExtraData] = useState([]);

  const updateExtraQuantity = (id, product, price, change) => {
    setExtraData((currentExtras) => {
      const existingExtra = currentExtras.find((extra) => extra.id === id);

      if (!existingExtra && change > 0) {
        return [
          ...currentExtras,
          {
            id,
            product,
            price,
            quantity: 1,
          },
        ];
      }

      if (!existingExtra) {
        return currentExtras;
      }

      const newQuantity = existingExtra.quantity + change;

      if (newQuantity <= 0) {
        return currentExtras.filter((extra) => extra.id !== id);
      }

      return currentExtras.map((extra) =>
        extra.id === id
          ? { ...extra, quantity: newQuantity }
          : extra
      );
    });
  };

  const valuesToShare = {
    extraData,
    setExtraData,
    updateExtraQuantity,
  };

  return (
    <ExtraContext.Provider value={valuesToShare}>
      {children}
    </ExtraContext.Provider>
  );
}

export default ExtraContext;