import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../api/product_api";
import {
  deleteProductAction,
  getAllProductsAction,
} from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export function Products() {
  const { products, isLoading, errors } = useSelector(
    (store) => store.productSlice
  );
  const { user } = useSelector((store) => store.authSlice);

  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  const deleteHandler = async (productId) => {
    dispatch(deleteProductAction(productId));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center text-muted">Our Products</h2>
      <div className="mt-5 d-flex justify-content-between">
        <input
          type="text"
          className="w-25 form-control"
          placeholder="Search ...."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {!user ? (
          <></>
        ) : user.role == "admin" ? (
          <Link to="0/edit" className="btn btn-outline-primary">
            Add New Product
          </Link>
        ) : (
          <></>
        )}
      </div>
      {isLoading && !errors && (
        <div className="mt-5 alert alert-dark">
          <h1>Loading ...... </h1>
        </div>
      )}
      {errors && (
        <div className="mt-5 alert alert-danger">{errors.message}</div>
      )}
      {!isLoading && !errors && (
        <Row className="container mx-auto justify-content-center">
          {filteredProducts.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard
                product={product}
                children={
                  !user ? (
                    <></>
                  ) : user.role === "admin" ? (
                    <Card.Text>
                      <Link to={`${product.id}/edit`}>
                        <FaEdit className="text-info mx-2 fs-3" />
                      </Link>
                      <Link to={`${product.id}`}>
                        <IoEye className="text-warning mx-2 fs-3" />
                      </Link>
                      <MdDelete
                        className="text-danger mx-2 fs-3"
                        onClick={() => deleteHandler(product.id)}
                      />
                    </Card.Text>
                  ) : (
                    <></>
                  )
                }
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
