import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Row>
          <Col xs="12" sm="12" md="12" lg="12" xl="12">
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/products/:id" component={ProductDetail} />
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </Col>
        </Row>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;