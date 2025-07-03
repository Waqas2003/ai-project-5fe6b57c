import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Header = () => {
  return (
    <Container>
      <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Ecommerce Website</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;