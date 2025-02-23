import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { login } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { login } from "../redux/slices/authSlice";

export function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({ email: form.username, password: form.password, navigate })
    );
  };

  return (
    <Container className="mt-4">
      <h2>Sign In</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" disabled={loading} className="mt-2">
          {loading ? "Signing In..." : "Sign In"}
        </Button>
      </Form>
    </Container>
  );
}
