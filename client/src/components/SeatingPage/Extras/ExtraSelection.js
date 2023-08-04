import React from "react";
import Extra from "./Extra";

const ExtraSelection = ({ seats }) => {
  const extraData = [
    {
      id: 1,
      product: "Regular Popcorn",
      price: 4.99,
      quantity: 1,
    },
    {
      id: 2,
      product: "Large Popcorn",
      price: 5.99,
      quantity: 1,
    },
    {
      id: 3,
      product: "Regular Soft Drink",
      price: 2.99,
      quantity: 1,
    },
    {
      id: 4,
      product: "Large Soft Drink",
      price: 3.99,
      quantity: 1,
    },
    {
      id: 5,
      product: "M&Ms",
      price: 2.99,
      quantity: 1,
    },
    {
      id: 6,
      product: "Dairy Milk",
      price: 2.99,
      quantity: 1,
    },
    {
      id: 7,
      product: "Malteasers",
      price: 2.99,
      quantity: 1,
    },
    {
      id: 8,
      product: "Pix n Mix Small",
      price: 1.49,
      quantity: 1,
    },
    {
      id: 9,
      product: "Pix n Mix Medium",
      price: 2.69,
      quantity: 1,
    },
    {
      id: 10,
      product: "Pix n Mix Large",
      price: 3.99,
      quantity: 1,
    },
  ];

  const renderedList = extraData.map((extra) => {
    return (
      <Extra
        product={extra.product}
        price={extra.price}
        id={extra.id}
        seats={seats}
      />
    );
  });
  return (
    <div className="ticket-selection-main">
      <h1>Choose Extras</h1>
      <hr />
      <div className="ticket-selection-container">{renderedList}</div>
    </div>
  );
};

export default ExtraSelection;
