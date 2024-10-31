import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Confirmation() {
  const [confirmationData, setConfirmationData] = useState({
    id: "",
    fullname: "",
    email: "",
    phoneNumber: "",
    visitDate: "",
    online: false,
    acceptedTerms: false,
    confirmation: false,
  });

//   useEffect(() => {
//     gettingUserData()
//     .then((data) => setConfirmationData(...data)
//     .catch((error) => console.log(error)))
//   }, []);

//   async function gettingUserData() {
//     const response = await fetch("http://localhost:3004/reservations/${id}");
//     const data = response.json();
//     console.log(data);
//     return data;
//   }
  return (
    <Container>
      <Row xs={12} className="mb-3">
        <Col>
          <h1>Psychologist Karolina Nowak</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>1. Confirm your reservation</h2>
          <p></p>
        </Col>
      </Row>
    </Container>
  );
}
export default Confirmation;
