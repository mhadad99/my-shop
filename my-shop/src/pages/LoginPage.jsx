import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from "../store/authSlice";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FormContainer } from "../components/FormContainer";
import { validateInput } from "../SharedLayout/func";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, user } = useSelector((state) => state.authSlice);

  useEffect(() => {
    const url = window.location.pathname;
    if (url === "/login" && user) {
      navigate("/");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput(password, "password") || !validateInput(email, "email")) {
    } else {
    dispatch(loginAction({ email, password }))
      .unwrap()
      .then(() => navigate("/"))
      .catch((err) => console.error("Login failed:", err));
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>LOGIN</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="my-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                isValid={email && validateInput(email, "email")}
                isInvalid={email && !validateInput(email, "email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Password </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                isInvalid={password && !validateInput(password, "password")}
                isValid={password && validateInput(password, "password")}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
         
            </Form.Group>
            <Button
              className="my-3"
              type="submit"
              disabled={isLoading || !password || !email}
              variant="dark"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
            <p>
              Don't have an account? <Link to="/register">Register Now</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
