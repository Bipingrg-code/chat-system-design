import './chat.css'
import {Container, Row, Col} from 'react-bootstrap'
import Sidebar from '../../components/Sidebar.jsx'
import Messagefrom from '../../components/Message/MessageFrom.jsx'

const Chat = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col md={8}>
          <Messagefrom />
        </Col>
      </Row>
    </Container>
  )
}

export default Chat
