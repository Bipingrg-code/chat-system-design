import './login.css'
import {Container, Row, Col, Button, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <Container>
      <Row className='login__bg'>
        <Col md={5}>
        </Col>
        <Col md={7} className='d-flex justify-content-center align-items-center flex-direction-column'>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Well never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <div className='py-4'>
              <p className="text-center">
                Dont have an Account.?<Link to="/signup">  Signup Here</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;