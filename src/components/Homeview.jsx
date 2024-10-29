import { Link } from "react-router-dom";
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
      <Row>
        <Col xs={12}>
          <div className="flex-row d-flex flex-nowrap mb-1 mr-2">
            <div className="flex-col flex-nowrap" style={{ width: "60%" }}>
              <div className="flex-cell name"> Stationary Consultation</div>
              <div className="flex-cell comment"></div>
            </div>
            <div className="flex-col w-40" style={{ width: "40%" }}>
              <div className="flex-cell duration">
                <span className="duration">50 min</span>
              </div>
              <div className="flex-cell price"></div>
            </div>
            <div
              className="flex-col justify-content-end"
              style={{ width: "80px" }}
            >
              <div className="flex-cell button">
                <Link
                  to="/book/stationary"
                  className="btn btn-primary btn-sm service"
                  data-id="35033"
                >
                  <span className="choose">Choose</span>
                  <span className="ok glyphicon glyphicon-ok"></span>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12}>
          <div className="flex-row d-flex flex-nowrap mb-1 mr-2">
            <div className="flex-col flex-nowrap" style={{ width: "60%" }}>
              <div className="flex-cell name">Online Consultation</div>
              <div className="flex-cell comment"></div>
            </div>
            <div className="flex-col w-40" style={{ width: "40%" }}>
              <div className="flex-cell duration">
                <span className="duration">50 min</span>
              </div>
              <div className="flex-cell price"></div>
            </div>
            <div
              className="flex-col justify-content-end"
              style={{ width: "80px" }}
            >
              <div className="flex-cell button">
                <Link
                  to="/book/online"
                  className="btn btn-primary btn-sm service"
                  data-id="35033"
                >
                  <span className="choose">Choose</span>
                  <span className="ok glyphicon glyphicon-ok"></span>
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Homeview;
