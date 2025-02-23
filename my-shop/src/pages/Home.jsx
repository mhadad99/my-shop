import React, { useEffect, useState } from "react";
import HomeHero from "../components/HomeHero";
import ProductsHome from "../components/ProductsHome";
import { getAllProducts } from "../api/product_api";
import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Brand } from "../components/Brand";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductAction,
  getAllProductsAction,
} from "../store/productSlice";
import ProductCard from "../components/ProductCard";
import { registerUser, signinUser } from "../store/userSlice";

export function Home() {
  const { products, isLoading, errors } = useSelector(
    (store) => store.productSlice
  );
  const { users } = useSelector((store) => store.userSlice);
  //
  const dispatch = useDispatch();
  useEffect(() => {
    // database ---
    // dispatch(signinUser({ email: "hana.mostafa@example.com", password: "123" }));
    // dispatch(registerUser({ username:"s",email: "hana.mostafacs@example.com", password: "123" }));
    dispatch(getAllProductsAction());
  }, []);
  return (
    <>
      <HomeHero></HomeHero>
      <Brand></Brand>
      {/* <ProductsHome ></ProductsHome> */}
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
