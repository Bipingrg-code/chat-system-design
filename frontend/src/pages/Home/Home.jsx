import './home.css'
import { Container, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

function Home() {
    return (
        <Container>
            <Row>
                <Col md={6} className="d-flex flex-direction-column align-items-center jusitify-content-center">
                    <div>
                        <h1>Share the world with your friends</h1>
                        <p>Chat app lets connect wih world</p>
                        <LinkContainer to="/chat">
                            <Button varient="success"><i className="fas fa-comments home-message-icons"></i> Get Started</Button>
                        </LinkContainer>
                    </div>
                </Col>
                <Col md={6} className="home__bg">
                </Col>
            </Row>
        </Container>
    );
}

export default Home;