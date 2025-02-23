import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  ListGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      size: "Large",
      color: "White",
      img: "cartImage/cart1.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Checkered Shirt",
      price: 180,
      size: "Medium",
      color: "Red",
      img: "cartImage/cart2.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      price: 240,
      size: "Large",
      color: "Blue",
      img: "cartImage/cart3.png",
      quantity: 1,
    },
  ]);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <Container className="mt-4">
      <h2 className="fw-bold mb-4 ms-2">YOUR CART</h2>
      <Row className="justify-content-between">
        <Col md={7} className="pe-5 ms-n5">
          {cart.map((item) => (
            <Card key={item.id} className="mb-4 p-3 shadow-sm">
              <Row className="align-items-center">
                <Col xs={3}>
                  <Image src={item.img} alt={item.name} fluid rounded />
                </Col>
                <Col xs={6}>
                  <h5 className="fw-bold">{item.name}</h5>
                  <p className="text-muted mb-1">Size: {item.size}</p>
                  <p className="text-muted">Color: {item.color}</p>
                </Col>
                <Col xs={3} className="text-end">
                  <h5 className="fw-bold">${item.price * item.quantity}</h5>
                  <div className="d-flex justify-content-end align-items-center">
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="light"
                      size="sm"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
        <Col md={4} className="ms-5">
          <Card className="p-4 shadow-sm">
            <h4 className="fw-bold">Order Summary</h4>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Subtotal</span> <span>${subtotal}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between text-danger">
                <span>Discount (-20%)</span>{" "}
                <span>-${discount.toFixed(2)}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Delivery Fee</span> <span>${deliveryFee}</span>
              </ListGroup.Item>
            </ListGroup>
            <hr />
            <h5 className="fw-bold d-flex justify-content-between">
              <span>Total</span> <span>${total.toFixed(2)}</span>
            </h5>
            <Button variant="dark" className="w-100 mt-3 rounded-pill">
              Go to Checkout →
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
