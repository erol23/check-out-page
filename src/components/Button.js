import Button from "react-bootstrap/Button";

import React from "react";

const ShowButton = ({hideShowFunc, addProduct}) => {
  return (
    <div className="d-flex justify-content-center">
      <Button onClick={hideShowFunc}> {addProduct ? "Show Add Product" : "Hide Add Product"} </Button>
    </div>
  );
};

export default ShowButton;
