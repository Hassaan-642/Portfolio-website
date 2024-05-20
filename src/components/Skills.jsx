import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const Skills = () => (
  <Container className="my-5">
    <h2 className="text-center mb-4">My Skills</h2>
    <Row>
      <Col md={6} className="my-3">
        <h5 style={{ color: "#27ae60", marginBottom: "10px" }}>Data Science</h5>
        <ProgressBar
          now={70}
          label="70%"
          variant="success"
          style={{ borderRadius: "10px" }}
        />
      </Col>
      <Col md={6} className="my-3">
        <h5 style={{ color: "#2980b9", marginBottom: "10px" }}>Python</h5>
        <ProgressBar
          now={80}
          label="80%"
          variant="info"
          style={{ borderRadius: "10px" }}
        />
      </Col>
    </Row>
    <Row>
      <Col md={6} className="my-3">
        <h5 style={{ color: "#f39c12", marginBottom: "10px" }}>C++</h5>
        <ProgressBar
          now={60}
          label="60%"
          variant="warning"
          style={{ borderRadius: "10px" }}
        />
      </Col>
      <Col md={6} className="my-3">
        <h5 style={{ color: "#e74c3c", marginBottom: "10px" }}>MySQL</h5>
        <ProgressBar
          now={65}
          label="65%"
          variant="danger"
          style={{ borderRadius: "10px" }}
        />
      </Col>
    </Row>
  </Container>
);

export default Skills;
