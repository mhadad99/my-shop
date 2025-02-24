import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerAction } from "../store/authSlice";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { validateInput } from "../SharedLayout/func";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, user } = useSelector((state) => state.authSlice);

  useEffect(() => {
    const url = window.location.pathname;
    if (url === "/register" && user) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, username, password, role };
    if (
      !validateInput(password, "password") ||
      !validateInput(email, "email") ||
      !validateInput(username, "username") ||
      !validateInput(name, "text")
    ) {
    } else {
      dispatch(registerAction(newUser))
        .unwrap()
        .then(() => {
          navigate("/");
          Swal.fire("Success!", "You have registered successfully.", "success");
        })
        .catch((err) => {
          console.error("Registration failed:", err);
          Swal.fire(
            "Error!",
            "Registration failed. Please try again.",
            "error"
          );
        });
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Register</h1>
          {error && <div className="alert alert-danger">{error}</div>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="my-3">
              <Form.Label> Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                isValid={name && validateInput(name, "text")}
                isInvalid={name && !validateInput(name, "text")}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
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
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter UserName"
                isInvalid={username && !validateInput(username, "username")}
                isValid={username && validateInput(username, "username")}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              disabled={isLoading || !password || !email || !name || !username}
              variant="dark"
            >
              {isLoading ? "Registering...." : "Register"}
            </Button>
            <p>
              I have account <Link to="/login">Login</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
