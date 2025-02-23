import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { addNewProduct, editProduct, getProductById } from "../api/product_api";
import { useNavigate, useParams } from "react-router-dom";

export function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    image: "",
    rating:0,
    numsReviews:0

  });

  useEffect(() => {
    if (id != 0) {
      getProductById(id)
        .then((response) => setFormData(response.data))
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  const inputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const productHandler = async (e) => {
    e.preventDefault();

    if (id == 0) {
      await addNewProduct(formData);
      navigate("/products");
    } else {
      await editProduct(id, formData);
      navigate("/products");
    }
  };
  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-muted text-center">
        {id == 0 ? "Add New Product" : "Edit Product"}
      </h2>
      <Form onSubmit={productHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            name="name"
            value={formData.name}
            onChange={inputHandler}
            type="text"
            placeholder="Enter Product Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            value={formData.price}
            onChange={inputHandler}
            type="text"
            placeholder="Enter Product Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="test">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            name="quantity"
            value={formData.quantity}
            onChange={inputHandler}
            type="number"
            placeholder="Enter Product Quantity"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="test">
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="image"
            value={formData.image}
            onChange={inputHandler}
            type="text"
            placeholder="Enter Product Image URL"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="test">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            name="rating"
            value={formData.rating}
            onChange={inputHandler}
            type="number"
            placeholder="Enter Product Rating"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="test">
          <Form.Label>Number of Reviews</Form.Label>
          <Form.Control
            name="numsReviews"
            value={formData.numsReviews}
            onChange={inputHandler}
            type="text"
            placeholder="Enter Product Number Reviews"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          {id == 0 ? "Add New Product" : "Edit Product"}
        </Button>
      </Form>
    </Container>
  );
}
