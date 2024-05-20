// src/components/Projects.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const projects = [
  { image: "CaseStudyOnSalesAndPaymentData.jpg", title: "Case Study on sales and payment data : In this case study, I conducted an in-depth analysis of sales and payment data using SQL as the primary analytical tool. The case study aimed to uncover actionable insights from historical data, enabling data-driven decision-making within the organization. The objectives included identifying sales trends, understanding customer behavior, and improving payment processes." },
  { image: "DigitalDazzleImage.jpg", title: "Digital Dazzle-An Ecommerce Website: Discover the future at Digital Dazzle – your go-to destination for top-tier electronics. Explore the latest smartphones, smartwatches, and laptops, carefully curated for style and performance. Elevate your digital experience with Digital Dazzle – where innovation meets elegance." },
  { image: "TelecomComapanies.jpg", title: "Telecom Packages Comparative Analysis Case Study: Step into the intricate realm of telecommunications as we undertake an exhaustive exploration of diverse telecom packages offered by leading providers. Uncover the wealth of offerings within each package, ranging from data plans tailored to different usage needs, call minutes that keep you connected, to messaging services that bridge distances. This comprehensive analysis ensures you gain a profound understanding of what each package brings to the table." },
];

const Projects = () => (
  <Container className="my-5" style={{ color: "blue" }}>
    <h2 className="text-center" color="red">
      Projects
    </h2>
    <Row>
      {projects.map((project, index) => (
        <Col md={4} key={index} className="my-3">
          <Card>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Projects;
