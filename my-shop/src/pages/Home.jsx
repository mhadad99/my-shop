import React, { useEffect, useState } from "react";
import HomeHero from "../components/HomeHero";
import { Col, Row, Table } from "react-bootstrap";
import { Brand } from "../components/Brand";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../store/productSlice";
import ProductCard from "../components/ProductCard";

export function Home() {
  const { products, isLoading, errors } = useSelector(
    (store) => store.productSlice
  );
  //
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsAction());
  }, []);
  return (
    <>
      <HomeHero></HomeHero>
      <Brand></Brand>
      <div className="text-center my-5">
        <h2 className="fw-bold mb-3">Our picks for you</h2>
        <p className="text-muted">
          Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec
          eturlagix adipiscing eliet, cowec tetopak
        </p>
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
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}
