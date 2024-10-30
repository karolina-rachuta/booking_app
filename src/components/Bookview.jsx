import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button';

function Bookview() {
  const params = useParams();
  const [visits, setVisits] = useState([]);
  const [startDate, setStartDate] = useState(new Date().toJSON().slice(0, 10));

  console.log(params);

  useEffect(() => {
    getVisits()
      .then((data) => setVisits(data))
      .catch((error) => console.log(error));
  }, []);

  async function getVisits() {
    const response = await fetch("http://localhost:3004/visits");
    const data = await response.json();
    return data;
  }

  function handleChangeCalendar(e) {
    setStartDate(e.target.value);
  }

  function convertDay(dt) {
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return weekDays[new Date(dt).getDay()];
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Psychologist Karolina Nowak</h1>
        </Col>
      </Row>
      <Row className="flex-row-reverse">
        <Col className="text-right mt-5 mb-3" sm={6} md={4}>
          <FormControl
            type="date"
            value={startDate}
            onChange={handleChangeCalendar}
          />
        </Col>
      </Row>

      {visits.filter((visit) => (
        (new Date(visit.data)) > (new Date(startDate))
      ))
      .map((visit) => (
        <Row key={visit.date}>
          <Col
            className="mb-3"
            style={{
              backgroundColor: "#999",
              color: "#fff",
              padding: "8px",
              boxSizing: "border-box",
            }}
            xs={12}
          >
            {convertDay(visit.data)}, {visit.data}fdcve4r
          </Col>

          <Col className="mb-2" xs={12}>
            Morning:
            {visit.avaiableHours
              .filter((hour) => parseInt(hour) < 12)
              .map((hour) => (
                <Link to={`/form/${params.type}`} state={{ params: `${params.type}` }} className="mr-2">
                    <Button className="me-2" variant="outline-secondary">{hour}</Button>
                </Link>
              ))}
          </Col>

          <Col className="mb-2" xs={12}>
            Afternoon:
            {visit.avaiableHours
              .filter((hour) => parseInt(hour) >= 12 && parseInt(hour) < 16)
              .map((hour) => (
                <Link to={`/form/${params.type}`} state={{ params: `${params.type}` }} className="mr-2">
                    <Button className="me-2" variant="outline-secondary">{hour}</Button>
                </Link>
              ))}
          </Col>

          <Col className="mb-2" xs={12}>
            Evening:{" "}
            {visit.avaiableHours
              .filter((hour) => parseInt(hour) >= 16)
              .map((hour) => (
                <Link to={`/form/${params.type}`} state={{ params: `${params.type}` }}>
                    <Button className="me-2" variant="outline-secondary">
                  {hour}
                    </Button>
                </Link>
              ))}
          </Col>
      </Row>
      ))}
    </Container>
  );
}

export default Bookview;
