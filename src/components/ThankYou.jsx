import { useLocation, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function ThankYou() {
    let { state } = useLocation();
    let {formData} = state;
  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h1 className="mt-3 mb-5">Dietician Karolina Nowak</h1>
          <p>Thank you for booking the visit!</p>
          <p className="mb-5">Confirmation email will be send to: <span style={{fontWeight: "bold"}}>{formData.email}</span></p>
          <Link to="/"><Button>New Reservation</Button></Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ThankYou;
