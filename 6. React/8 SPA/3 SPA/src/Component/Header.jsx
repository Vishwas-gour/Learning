import{ Container, Row,Col } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

function Header() {
  return (
    <>
    <Container fluid id='header'  >
      <Row id='row'>
        <Col md={2} >1 of 1</Col>
        <Col md={8} >Welcome to my website</Col>
        <Col md={2} ><a href="#"><FaUser /></a></Col>
      </Row>
    </Container>
    </>
  );
}

export default Header