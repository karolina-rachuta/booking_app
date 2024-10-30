import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormText from "react-bootstrap/FormText";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";

function Reservation() {
  let { state} = useLocation();
  console.log(state.params);

  return (
    <Container>
      <Row xs={12}>
        <Col className="mt-5 mb-3">
          <h1>Psychologist Karolina Nowak</h1>
        </Col>
      </Row>
      <Row xs={12}>
        <Col>
          <Form action="">
            <FormGroup className="mb-3">
              <FormText>Fill in the details</FormText>
            </FormGroup>
            <FormGroup className="mb-3" controlId="name">
              <FormLabel>
                Full Name<sup>*</sup>
              </FormLabel>
              <FormControl type="text" required />
            </FormGroup>

            <FormGroup className="mb-3" controlId="email">
              <FormLabel>
                Email<sup>*</sup>
              </FormLabel>
              <FormControl type="email" required />
            </FormGroup>

            <FormGroup className="mb-3" controlId="phone">
              <FormLabel>
                Phone number<sup>*</sup>
              </FormLabel>
              <FormControl type="tel" required />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormCheck
                xs={3}
                type="checkbox"
                label="By booking a visit, I confirm that I accept the terms and conditions."
                required
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormText>
                <sup>*</sup> required
              </FormText>
            </FormGroup>

            <Row xs={12}>
              <Col>
                <Link to={`/book/${state.params}`}>
                  <Button variant="outline-secondary" type="submit">
                    &lt; Previous
                  </Button>
                </Link>
              </Col>

              <Col className="text-end">
                <Link to="/confirmation">
                  <Button variant="primary" type="submit">
                    Next &gt;
                  </Button>
                </Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Reservation;
