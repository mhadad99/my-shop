import React, { useState } from "react";
import { Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faFire,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { logout } from "../store/authSlice";

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.authSlice);
  const { cartItems } = useSelector((store) => store.cartSlice);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "No, stay logged in",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        navigate("/login");
        Swal.fire("Logged out!", "You have been logged out.", "success");
      }
    });
  };

  return (
    <section>
      <div className="p-2 d-flex justify-content-center fw-bolder text-light align-items-center bg-dark">
        <span>
          <FontAwesomeIcon icon={faFire} className="text-warning mx-2" /> Free
          shipping on all U.S. orders $50+
        </span>
        <a
          href="/products"
          className="btn btn-outline-light mx-4 fw-bolder rounded-2"
        >
          Shop Now
        </a>
      </div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand
            href="/"
            style={{ fontFamily: "integralcf, sans-serif" }}
          >
            <h1>SHOP.CO</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
              <NavLink className="nav-link" to="/">
                About
              </NavLink>
            </Nav>
            {user && (
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-dark mx-3 fs-5"
                />
                <span className="badge bg-danger">{cartItems.length}</span>
              </Link>
            )}
            {user ? (
              <>
                <span className="nav-link fw-bold text-success">
                  Welcome, {user.name}!
                </span>
                <button className="btn btn-danger mx-2" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <NavLink className="btn btn-dark mx-3" to="/login">
                Login
              </NavLink>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}
