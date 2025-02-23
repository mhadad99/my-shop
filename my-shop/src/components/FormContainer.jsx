import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

export function FormContainer({ childern }) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {childern}
        </Col>
      </Row>
    </Container>
  );
}
