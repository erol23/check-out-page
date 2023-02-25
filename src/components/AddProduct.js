// import axios from "axios";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddProduct = ({getData}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState();

  const BASE_URL = "https://63fa064c473885d837d70e48.mockapi.io/products/";

  const handleSubmit = (e) =>{
    e.preventDefault()
    const newProduct = {name:name, price:parseFloat(price), image:image, amount:parseFloat(amount), }
    const createProduct = {...newProduct, dampingRate:0.8}
    postProduct(createProduct)
  }
  
  const postProduct = async(newProduct) => {
    try {
      await axios.post(BASE_URL, newProduct)
    } catch (error) {
      console.log(error)
    }
    setName("")
    setPrice("")
    setAmount("")
    setImage("")
    getData()
  }
  return (
    <div className="mt-5 mx-5" style={{ width: "20rem" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="product">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value = {name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="product">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price"
            value = {price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="product">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control
            type="number"
            placeholder="Quantity"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="product">
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: "100%" }}>
          Add to Card
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
