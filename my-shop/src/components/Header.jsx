import React, { useState } from "react";
import { Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

export function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.authSlice);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };


  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };
  return (
    <section>
      <div className="p-2 d-flex justify-content-center fw-bolder text-light align-items-center bg-dark">
        <span>
          <FontAwesomeIcon icon={faFire} className="text-warning mx-2" /> Free
          shipping on all U.S. orders $50+
        </span>
        <a href="/products" className="btn btn-outline-light mx-4 fw-bolder rounded-2">
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
              <NavLink className="nav-link" to="/signin">
                About
              </NavLink>
            </Nav>
            <div className="relative max-w-2xl w-full  my-4">
              <div className="relative rounded-5 p-2  bg-gray border rounded-5 focus:outline-none bg-light">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-secondary mx-2"
                />
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="border-0 focus:border-none focus:outline-none bg-transparent  w-75"
                />
              </div>
            </div>

            {user ? (
                <>
                  <span className="nav-link fw-bold text-success">
                    Welcome, {user.name}!
                  </span>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink className="btn btn-dark mx-3" to="/login">
                  Sign In
                </NavLink>
              )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}
