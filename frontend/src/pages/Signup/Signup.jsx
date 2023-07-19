import { useState } from 'react'
import './signup.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    e.preventDefault()
    console.log(setEmail)
    alert('Signup Succesfully..!')
  }
  return (
    <Container>
      <Row>
        <Col md={7} className='d-flex justify-content-center align-items-center flex-direction-column'>
          <Form onSubmit={handleChange}>
              <h1>Create Your account Free.!</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Fullname" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Jhon@gmail.com"  name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <Form.Text className="text-muted">
                Well never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
            <div className='py-4'>
              <p className="text-center">
                Already have an Account.?<Link to="/login"> Login</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className='signup__bg'>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup
