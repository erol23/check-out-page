import { useState } from "react";
import AddProduct from "../components/AddProduct";
import ShowButton from "../components/Button";
import CardTotal from "../components/CardTotal";
import Header from "../components/Header";

const Main = () => {
  const [addProduct, setAddProduct] = useState(true);

  const hideShowFunc = () => {
    setAddProduct(!addProduct);
  };

  return (
    <div>
      <Header />
      <ShowButton hideShowFunc={hideShowFunc} addProduct={addProduct}/>
      {addProduct ? (
        <CardTotal />
      ) : (
        <div className="d-flex justify-content-center">
          <AddProduct />
          <CardTotal />
        </div>
      )}
    </div>
  );
};

export default Main;
