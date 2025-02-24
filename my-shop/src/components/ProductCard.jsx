import { Card, Button } from "react-bootstrap";
import React from "react";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function ProductCard({ product, children }) {
  const dispatch = useDispatch()
  const { user } = useSelector((store) => store.authSlice);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
        {product.image ? (
          <Card.Img src={product.image} />
        ) : (
          <Card.Img src="productImage/img3.png" />
        )}
      </a>
      <Card.Body>
        <a href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
          <Card.Title as="div">
            <strong className="fw-bold text-dark">{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numsReviews} Reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">{product.price}$</Card.Text>
        {children}
      </Card.Body>
{ !user? <></>:!(user.role == "admin"   )?    <Card.Text>
        <Button
                className="btn btn-dark col-12"
                disabled={product.quantity === 0}
                type="button"
                onClick={handleAddToCart}
              >
                Add To Cart
              </Button>
        </Card.Text>:<></>}
    </Card>
  );
}
