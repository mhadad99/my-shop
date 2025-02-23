import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import productImg from "../assets/1.jpg";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../api/product_api";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import Rating from "../components/Rating";
export function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    getProductById(id)
      .then((response) => setProduct(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <Link to="/" className="btn btn-outline-dark my-3">
        {" "}
        Home
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numsReviews} Reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price</Col>
                <Col>
                  <strong>{product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status</Col>
                <Col>
                  <strong>
                    {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="btn btn-dark col-12"
                disabled={product.quantity == 0}
                type="button"
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}
