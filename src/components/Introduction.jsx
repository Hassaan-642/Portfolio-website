// src/components/Introduction.jsx
import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Introduction = () => (
  <Container
    className="text-center my-5"
    style={{
      background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
      padding: "50px 20px",
      borderRadius: "15px",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    }}
  >
    <Row>
      <Col md={4} className="mx-auto">
        <Image
          src="../Hassaan.jpeg"
          roundedCircle
          fluid
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            border: "5px solid #fff",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
          }}
        />
      </Col>
    </Row>
    <Row>
      <Col
        className="my-4"
        style={{
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h1
          style={{
            fontWeight: "700",
            color: "#333",
            marginTop: "20px",
            animation: "fadeInDown 1s ease-in-out",
          }}
        >
          Hello, I'm Hassaan Ul Haq!
        </h1>
        <h2
          style={{
            fontWeight: "300",
            color: "#666",
            marginTop: "10px",
          }}
        >
          Hope you are doing well
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#555",
            marginTop: "20px",
            animation: "fadeInUp 1s ease-in-out",
          }}
        >
          CS Final Year Student | Data Scientist | MYSQL | SQL | .NET | BSCS
        </p>
        <div
        className="social-icons my-3"
        style={{
          marginTop: "20px",
        }}
      >
        <a
          href="https://www.linkedin.com/in/hassaanulhaq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline-primary" style={{ marginRight: "10px" }}>
            <FaLinkedin /> LinkedIn
          </Button>
        </a>
        <a
          href="https://github.com/Hassaan-642"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline-dark" style={{ marginRight: "10px" }}>
            <FaGithub /> GitHub
          </Button>
        </a>
        <a
          href="mailto:hassaanhaq10@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline-danger">
            <FaEnvelope /> Email
          </Button>
        </a>
      </div>
      </Col>
    </Row>
  </Container>
);

export default Introduction;
