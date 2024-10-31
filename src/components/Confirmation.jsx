import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { convertDay } from "../helpers/convertDay";

function Confirmation() {
  const params = useParams();
  const { id } = params;
  console.log(id);
  const [confirmationData, setConfirmationData] = useState({});

  useEffect(() => {
    gettingUserData(id)
      .then((data) => setConfirmationData(data))
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    console.log(confirmationData); // Loguj po aktualizacji
  }, [confirmationData]);

  async function gettingUserData(id) {
    const response = await fetch(`http://localhost:3004/reservations/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  }

  function handleBooking(e) {
    e.preventDefault();
  }

  const {
    fullname = "",
    email = "",
    phoneNumber = "",
    visitDate = "",
    online = false,
  } = confirmationData;

  const dateFromVisitDate = visitDate.slice(0, 10);
  const timeFromVisitDate = visitDate.slice(12);
  console.log(timeFromVisitDate);
  console.log(dateFromVisitDate);

  return (
    <Container>
      <Row xs={12} className="mb-5 mt-3">
        <Col>
          <h1>Psychologist Karolina Nowak</h1>
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
          <p style={{ fontWeight: "bold" }} className="mb-1">{`${convertDay(
            dateFromVisitDate
          )}, ${dateFromVisitDate.slice(8)}.${dateFromVisitDate.slice(
            5,
            7
          )}.${dateFromVisitDate.slice(0, 4)}`}</p>
          <p style={{ fontWeight: "bold" }}>{`time: ${timeFromVisitDate}`}</p>
        </Col>
        <Col>
          <p style={{ fontWeight: "bold" }}>Reservation for:</p>
          <p>{fullname}</p>
          <p>{email}</p>
          <p>{phoneNumber}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>2. Reservation terms:</h2>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <Button variant="outline-secondary">Previous</Button>
        </Col>
        <Col>
          <Button variant="outline-secondary" className="mr-2">
            Cancel
          </Button>
          <Button onClick={handleBooking} variant="primary" className="ml-2">
            Book visit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default Confirmation;
