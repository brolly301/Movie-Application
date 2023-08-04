import { createContext, useState } from "react";

const ExtraContext = createContext();

export function ExtraProvider({ children }) {
  const [extraData, setExtraData] = useState([]);

  const addProduct = (id, product, price) => {
    const createProduct = [
      ...extraData,
      {
        product: product,
        price: price,
        quantity: 1,
        id: id,
      },
    ];
    setExtraData(createProduct);
  };
  const addQuantity = (id) => {
    const updatedTicket = extraData.map((extra) => {
      if (extra.id === id) {
        return { ...extra, quantity: extra.quantity + 1 };
      }
      return extra;
    });
    setExtraData(updatedTicket);
  };

  const removeQuantity = (id) => {
    const updatedTicket = extraData.map((extra) => {
      if (extra.id === id && extra.quantity >= 1) {
        return { ...extra, quantity: extra.quantity - 1 };
      }
      return extra;
    });
    setExtraData(updatedTicket);
  };

  const deleteTicket = (id) => {
    const updatedTickets = extraData.filter((extra) => {
      return extra.id !== id;
    });
    setExtraData(updatedTickets);
  };

  const valuesToShare = {
    addProduct,
    addQuantity,
    removeQuantity,
    deleteTicket,
    extraData,
    setExtraData,
  };

  return (
    <ExtraContext.Provider value={valuesToShare}>
      {children}
    </ExtraContext.Provider>
  );
}

export default ExtraContext;
