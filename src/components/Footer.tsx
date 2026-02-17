import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="bg-dark border-top border-secondary mt-auto py-5">
      <Container>
        <Row className="mb-2 justify-content-center">
          <Col className="mb-2 mb-md-0 text-center">
            <h5 className="text-white text-uppercase small tracking-wide mb-2">
              🚀 Space News
            </h5>

            <h6 className="text-white text-uppercase small mb-2">
              <span className="text-secondary small lh-lg">
                Powered by the &nbsp;
                <a
                  href="https://spaceflightnewsapi.net"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light"
                >
                  Spaceflight News API
                </a>
              </span>
            </h6>
          </Col>
        </Row>

        <Row>
          <Col>
            <hr className="border-secondary" />
            <p className="text-secondary small text-center mb-0">
              © {new Date().getFullYear()} Space News. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
