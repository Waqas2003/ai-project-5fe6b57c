import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${match.params.id}/`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [match.params.id]);

  return (
    <Container>
      <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;