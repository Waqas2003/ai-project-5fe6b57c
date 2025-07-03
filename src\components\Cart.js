import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Cart = () => {
  const [cart, setCart] = useState({});

  return (
    <Container>
      <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12">
          <h2>Cart</h2>
          <ul>
            {Object.keys(cart).map(productId => (
              <li key={productId}>
                {cart[productId].name} x {cart[productId].quantity}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;