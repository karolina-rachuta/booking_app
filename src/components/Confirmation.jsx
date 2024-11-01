import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { convertDay } from "../helpers/convertDay";

function Confirmation() {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  console.log(id);
  const [confirmationData, setConfirmationData] = useState({});

  useEffect(() => {
    gettingUserData(id)
      .then((data) => setConfirmationData(data))
      .catch((error) => console.log(error));
  }, [id]);

  async function gettingUserData(id) {
    const response = await fetch(`http://localhost:3004/reservations/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  }

  async function changingConfirmationOfTheVisit() {
    const request = await fetch(`http://localhost:3004/reservations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ confirmation: true }),
    });
    const data = await request.json();
    console.log(data);
    return data;
  }

  async function deleteDateFromTheVisits(id) {
    const response = fetch
  }

  async function confirmVisit(e, id) {
    e.preventDefault();
    try {
      const updatedData = await changingConfirmationOfTheVisit(id);
      setConfirmationData(updatedData);
      console.log(updatedData);
      navigate('/thankyou', {state: {formData: confirmationData }});
    } catch (error) {
      console.log(error);
    }
  }

  const {
    fullname = "",
    email = "",
    phoneNumber = "",
    visitDate = "",
    online = false,
    confirmation = false,
  } = confirmationData;

  const dateFromVisitDate = visitDate.slice(0, 10);
  const timeFromVisitDate = visitDate.slice(12);

  return (
    <Container>
      <Row xs={12} className="mb-5 mt-3">
        <Col>
          <h1>Dietician Karolina Nowak</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="mb-3">1. Confirm your reservation</h2>
          <p className="mb-1" style={{ fontWeight: "bold" }}>
            {online ? "Online Consultation" : "Stationary Consultation"}
          </p>
          <p>50 min</p>
        </Col>
      </Row>
      <Row xs={12} className="mb-5">
        <Col>Psychologist:</Col>
        <Col>Karolina Nowak - {online ? "online" : "stationary"}</Col>
      </Row>
      <Row xs={12} className="mb-4">
        <Col>
          <p style={{ fontWeight: "bold" }} className="mb-1">
            {`${convertDay(dateFromVisitDate)}, ${dateFromVisitDate.slice(
              8
            )}.${dateFromVisitDate.slice(5, 7)}.${dateFromVisitDate.slice(
              0,
              4
            )}`}
          </p>
          <p style={{ fontWeight: "bold" }}>{`time: ${timeFromVisitDate}`}</p>
        </Col>
        <Col>
          <p style={{ fontWeight: "bold" }}>Reservation for:</p>
          <p>{fullname}</p>
          <p>{email}</p>
          <p>{phoneNumber}</p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h2>2. Reservation terms:</h2>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>Cancelation policy:</Col>
        <Col xs={8}>
          Visit can be canceled up to 24h before the set date of the visit
        </Col>
      </Row>
      <Row>
        <Col>
        <Link to={`/form/${online ? 'online' : 'stationary'}/${id}`} state={{ formData: confirmationData }}><Button variant="outline-secondary">Previous</Button></Link>
        </Col>
        <Col className="d-flex ">
          <Link to="/"><Button variant="outline-secondary" style={{ marginRight: "10px" }}>
            Cancel
          </Button></Link>
          <Button onClick={confirmVisit} variant="primary">
            Book visit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default Confirmation;
