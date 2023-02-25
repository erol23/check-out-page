import { useState } from "react";
import data from "../helper/data";
import ProductCard from "./ProductCard";

const CardTotal = () => {
  const [newData, setNewData] = useState(data);

  const increase = (productId) => {
    const updatedData = newData.map((item) => {
      if (item.id === productId) {
        const newItem = { ...item, amount: item.amount + 1 };
        return newItem;
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

  const subtotal = newData.reduce((total, item) => {
    return (total + item.price * item.amount);
  }, 0);

  const tax = (subtotal*0.18).toFixed(2)
  let currentShipping = 300
  const shipping = () => {
    if(subtotal>2000){
        currentShipping = 0
        return currentShipping;
    }
    return currentShipping;
  }
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
                amount={item.amount}
                decrease={decrease}
                increase={increase}
                key={item.id}
                {...item}
              />
            );
          })}
          <div>
            <div className="d-flex justify-content-between">
              <h3>Subtotal</h3> <h3>${subtotal.toFixed(2)}</h3>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h3>Tax</h3> <h3>${tax}</h3>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h3>Shipping</h3> <h3>${shipping()}</h3>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h3>Total</h3> <h3>{(parseFloat(subtotal)+ parseFloat(tax) + parseInt(shipping())).toFixed(2)}</h3>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTotal;
