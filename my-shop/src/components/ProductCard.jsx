import { Card } from "react-bootstrap";
import React from "react";
import Rating from "./Rating";
import { FaEdit } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function ProductCard({ product, children }) {
  const { user } = useSelector((store) => store.authSlice);

  

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
    </Card>
  );
}
