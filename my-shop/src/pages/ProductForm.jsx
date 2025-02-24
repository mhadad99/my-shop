import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { addNewProduct, editProduct, getProductById } from "../api/product_api";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    image: "",
    rating: 0,
    numsReviews: 0,
  });

  useEffect(() => {
    if (id != 0) {
      getProductById(id)
        .then((response) => setFormData(response.data))
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const inputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateInput = (value, type) => {
    switch (type) {
      case "text":
        return value.trim() !== "";
      case "number":
        return !isNaN(value) && value > 0;
      case "url":
        return value.trim() !== "" && value.startsWith("http");
      default:
        return false;
    }
  };

  const productHandler = async (e) => {
    e.preventDefault();
    if (
      !validateInput(formData.name, "text") ||
      !validateInput(formData.price, "number") ||
      !validateInput(formData.quantity, "number") ||
      !validateInput(formData.image, "url") ||
      !validateInput(formData.rating, "number") ||
      !validateInput(formData.numsReviews, "number")
    ) {
      Swal.fire("Error!", "Please fill in all fields correctly.", "error");
    } else {
      if (id == 0) {
        await addNewProduct(formData);
        Swal.fire("Success!", "Product added successfully.", "success");
      } else {
        await editProduct(id, formData);
        Swal.fire("Success!", "Product updated successfully.", "success");
      }
      navigate("/products");
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-muted text-center">
        {id == 0 ? "Add New Product" : "Edit Product"}
      </h2>
      <Form onSubmit={productHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            name="name"
            value={formData.name}
            onChange={inputHandler}
            type="text"
            placeholder="Enter Product Name"
            isInvalid={formData.name && !validateInput(formData.name, "text")}
            isValid={formData.name && validateInput(formData.name, "text")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Product Discription</Form.Label>
          <Form.Control
            name="description"
            value={formData.description}
            onChange={inputHandler}
            type="text"
            placeholder="Enter Product Description"
            isInvalid={formData.description && !validateInput(formData.description, "text")}
            isValid={formData.description && validateInput(formData.description, "text")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            value={formData.price}
            onChange={inputHandler}
            type="number"
            placeholder="Enter Product Price"
            isInvalid={
              formData.price && !validateInput(formData.price, "number")
            }
            isValid={formData.price && validateInput(formData.price, "number")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            name="quantity"
            value={formData.quantity}
            onChange={inputHandler}
            type="number"
            placeholder="Enter Product Quantity"
            isInvalid={
              formData.quantity && !validateInput(formData.quantity, "number")
            }
            isValid={
              formData.quantity && validateInput(formData.quantity, "number")
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="image"
            value={formData.image}
            onChange={inputHandler}
            type="text"
            placeholder="Enter Product Image URL"
            isInvalid={formData.image && !validateInput(formData.image, "url")}
            isValid={formData.image && validateInput(formData.image, "url")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            name="rating"
            value={formData.rating}
            onChange={inputHandler}
            type="number"
            placeholder="Enter Product Rating"
            isInvalid={
              formData.rating && !validateInput(formData.rating, "number")
            }
            isValid={
              formData.rating && validateInput(formData.rating, "number")
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumsReviews">
          <Form.Label>Number of Reviews</Form.Label>
          <Form.Control
            name="numsReviews"
            value={formData.numsReviews}
            onChange={inputHandler}
            type="number"
            placeholder="Enter Product Number of Reviews"
            isInvalid={
              formData.numsReviews &&
              !validateInput(formData.numsReviews, "number")
            }
            isValid={
              formData.numsReviews &&
              validateInput(formData.numsReviews, "number")
            }
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          {id == 0 ? "Add New Product" : "Edit Product"}
        </Button>
      </Form>
    </Container>
  );
}
