import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { removeFromCart, clearCart } from "../store/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((store) => store.cartSlice);

  const handleRemoveFromCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this item from the cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(id));
        Swal.fire("Removed!", "The item has been removed.", "success");
      }
    });
  };

  const handleClearCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to proceed to checkout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, checkout!",
      cancelButtonText: "No, continue shopping",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        Swal.fire("Checked out!", "Your order has been placed.", "success");
      }
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-muted">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-info">Your cart is empty</div>
      ) : (
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row>
                    <Col md={2}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid"
                      />
                    </Col>
                    <Col md={3}>{item.name}</Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>Qty: {item.quantity}</Col>
                    <Col md={2}>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  variant="success"
                  className="w-100"
                  onClick={handleClearCart}
                >
                  Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
}
