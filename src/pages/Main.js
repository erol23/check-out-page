import { useState, useEffect } from "react";
import axios from "axios";
import AddProduct from "../components/AddProduct";
import ShowButton from "../components/Button";
import CardTotal from "../components/CardTotal";
import Header from "../components/Header";

const Main = () => {
  const [addProduct, setAddProduct] = useState(true);
  const [newData, setNewData] = useState([]);
  const BASE_URL = "https://63fa064c473885d837d70e48.mockapi.io/products/";

  const getData =  async() => {
    try {
      await axios(BASE_URL)
        .then(res => {
          const data = res.data
          setNewData(data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() =>{
    getData()
  },[])

  const deleteFunc = async(productId)=>{
    try {
      await axios.delete(`${BASE_URL}/${productId}`)
    } catch (error) {
      console.log(error)
    }
    getData()
  }

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

  const hideShowFunc = () => {
    setAddProduct(!addProduct);
    console.log(addProduct)
  };

  return (
    <div>
      <Header />
      <ShowButton hideShowFunc={hideShowFunc} addProduct={addProduct}/>
      {addProduct ? (
        <CardTotal newData={newData} deleteFunc={deleteFunc} increase={increase} decrease={decrease}/>
      ) : (
        <div className="d-flex justify-content-center">
          <AddProduct getData={getData}/>
          <CardTotal newData={newData} deleteFunc={deleteFunc} increase={increase} decrease={decrease}/>
        </div>
      )}
    </div>
  );
};

export default Main;
