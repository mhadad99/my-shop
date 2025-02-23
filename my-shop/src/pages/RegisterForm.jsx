import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerAction } from "../store/authSlice";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.authSlice);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, username, password, role };
    dispatch(registerAction(newUser))
      .unwrap()
      .then(() => navigate("/"))
      .catch((err) => console.error("Registration failed:", err));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>LOGIN</h1>
          {error && <div className="alert alert-danger">{error}</div>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="my-3">
              <Form.Label> Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter UserName"
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
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button
              className="my-3"
              type="submit"
              disabled={isLoading}
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
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label>Name:</label>
    //     <input
    //       type="text"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <label>Email:</label>
    //     <input
    //       type="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <label>Username:</label>
    //     <input
    //       type="text"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <label>Password:</label>
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <label>Role:</label>
    //     <select value={role} onChange={(e) => setRole(e.target.value)}>
    //       <option value="user">User</option>
    //       <option value="admin">Admin</option>
    //     </select>
    //   </div>
    //   <button type="submit" disabled={isLoading}>
    //     {isLoading ? "Registering..." : "Register"}
    //   </button>
    //   {error && <p style={{ color: "red" }}>{error}</p>}
    // </form>
  );
};

export default RegisterForm;
