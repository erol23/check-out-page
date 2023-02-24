import ProductCard from "./ProductCard";
import data from "../helper/data";
import { useState } from "react";

const CardTotal = () => {
  const [newData, setNewData] = useState(data);
  const [amount, setAmount] = useState(1);
  const [newPrice, setNewPrice] = useState(1);

//   const multiply = (productId) => {
//     const updatedData = newData.map((item) => {
//       if (item.id === productId) {
//         return { ...item, newPrice: item.amount * item.price };
//       }
//       return item;
//     });
//     setNewData(updatedData);
//   };

  const increase = (productId) => {
    const updatedData = newData.map((item) => {
      if (item.id === productId) {
        return { ...item, amount: item.amount + 1 };
      }

      return item;
    });
    setNewData(updatedData);
  };

  const decrease = (productId) => {
    const updatedData = newData.map((item) => {
      if (item.id === productId && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    setNewData(updatedData);
  };

  const subtotal = data.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="row">
        <div>
          <h2>Card Total</h2>
        </div>

        <div>
          {newData.map((item) => {
            return (
              <ProductCard
                amount={amount}
                decrease={decrease}
                increase={increase}
                newPrice={newPrice}
                key={item.id}
                {...item}
              />
            );
          })}
          <div>
            <div className="d-flex justify-content-between">
              <h3>Subtotal</h3> <h3>${subtotal}</h3>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h3>Tax</h3> <h3>300</h3>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h3>Shipping</h3> <h3>300</h3>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h3>Total</h3> <h3>300</h3>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTotal;
