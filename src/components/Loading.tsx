import { Row, Spinner } from "react-bootstrap"

const Loading = () => {
  return (
    <Row className="justify-content-center">
      <Spinner
        className="d-flex justify-content-center p-5"
        variant="warning"
        animation="border"
      />
    </Row>
  )
}
export default Loading
