import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

//missing validation of inputs
//19 linijka pokazuje sie przy kazdej literce w input
//patch- update ktoras literowke

function Reservation() {
  let { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();
  console.log(state);
  const [formData, setFormData] = useState({
    fullname: state?.formData?.fullname || "",
    email: state?.formData?.email || "",
    phoneNumber: state?.formData?.phoneNumber || "",
    acceptedTerms: false,
  });

  useEffect(() => {
    if (state?.formData) {
      setFormData((prevData) => ({
        ...prevData,
        ...state.formData,
      }));
      //wywolac patcha?
    }
  }, [state]);

  async function addDataToDatabase(newReservation) {
    const request = await fetch("http://localhost:3004/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReservation),
    });
    const data = await request.json();
    console.log(data);
    return data;
  }

  function handleChange(e) {
    const { value, name, checked, type } = e.target;
    const newInputData = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newInputData,
    });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    const online = state.params === "online" ? true : false;
    const newReservation = {
      ...formData,
      visitDate: `${state.date}T${state.time}`,
      online: online,
      confirmation: false,
    };
    console.log("newReservation", newReservation);
    if (
      !formData.fullname ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.acceptedTerms
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      const data = await addDataToDatabase(newReservation);
      console.log(data.id);
      navigate(`/confirmation/${data.id}`);
    } catch (error) {
      console.error("Error adding reservation:", error);
    }
  }

  return (
    <Container>
      <Row xs={12}>
        <Col className="mt-5 mb-3">
          <h1>Psychologist Karolina Nowak</h1>
        </Col>
      </Row>
      <Row xs={12}>
        <Col>
          <Form onSubmit={handleFormSubmit}>
            <FormGroup className="mb-3">
              <FormText>Fill in the details</FormText>
            </FormGroup>
            <FormGroup className="mb-3" controlId="name">
              <FormLabel>
                Full Name<sup>*</sup>
              </FormLabel>
              <FormControl
                type="text"
                name="fullname"
                required
                value={formData.fullname}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup className="mb-3" controlId="email">
              <FormLabel>
                Email<sup>*</sup>
              </FormLabel>
              <FormControl
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup className="mb-3" controlId="phoneNumber">
              <FormLabel>
                Phone number<sup>*</sup>
              </FormLabel>
              <FormControl
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormCheck
                xs={3}
                type="checkbox"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
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
                  <Button variant="outline-secondary" type="button">
                    &lt; Previous
                  </Button>
                </Link>
              </Col>

              <Col className="text-end">
                <Button variant="primary" type="submit">
                  Next &gt;
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default Reservation;
