import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo from "../images/logo.png";

function Homeview() {
  return (
    <Container>
      <Row>
        <Col className="center-block text-center" sm={12}>
          <img src={Logo} alt="Logo" />
        </Col>
      </Row>
    </Container>
  );
}
export default Homeview;
