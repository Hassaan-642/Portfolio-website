import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => (
  <Container className="my-5">
    <h2 className="text-center mb-4" style={{ color: "#3498db" }}>Contact Me</h2>
    <Row>
      <Col md={6} className="mx-auto">
        <Form style={{ background: "#f1f1f1", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <Form.Group controlId="formName">
            <Form.Label style={{ color: "#333" }}>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" style={{ borderColor: "#ddd", boxShadow: "none" }} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label style={{ color: "#333" }}>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" style={{ borderColor: "#ddd", boxShadow: "none" }} />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label style={{ color: "#333" }}>Date</Form.Label>
            <Form.Control type="date" style={{ borderColor: "#ddd", boxShadow: "none" }} />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label style={{ color: "#333" }}>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              style={{ borderColor: "#ddd", boxShadow: "none" }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ background: "#3498db", border: "none", width: "100%" }}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default Contact;
