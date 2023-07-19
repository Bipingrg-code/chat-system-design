import './messagefrom.css'
import { Row, Col, Form, Button } from "react-bootstrap";

const MessageFrom = () => {

  const handleMessage = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div className="message_output"> </div>
      <Form action="" onSubmit={handleMessage}>
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control type="text" placeholder="Enter your message..!"></Form.Control>
            </Form.Group>
          </Col>
          <Col md={1}>
            <Button type="submit" varianr="primary" style={{ width: "100%", backgroundColor: "lightblue" }}>
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default MessageFrom
