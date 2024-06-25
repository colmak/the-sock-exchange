import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

const ProductFeatures = ({ features }) => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Product Features</h2>
      <Row>
        {features.map(feature => (
          <Col key={feature.id} md={6} lg={3} className="mb-4">
            <div className="p-3 border rounded">
              <h3>{feature.feature}</h3>
              <p><strong>Benefit:</strong> {feature.benefit}</p>
              <p><strong>Target Audience:</strong> {feature.target_audience}</p>
              <a href="#">Click to buy</a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductFeatures;
