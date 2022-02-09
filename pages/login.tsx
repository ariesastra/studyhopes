import { useState } from 'react'
import Head from "next/head"
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Styles
import {
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
  Button
} from 'react-bootstrap'
import {title} from '@styles/index'

function login() {
  const router = useRouter()
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })

  // Set State for login
  const setForm = (e) => {
    e.preventDefault()
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value
    })
  }

  // Login handler to push to API
  const loginHandler = async (e) => {
    e.preventDefault()
    const login = await axios.post('http://localhost:3000/api/login', {
      formLogin
    })

    // If login success
    if(login.status === 200){      
      // set access token to local storage
      localStorage.setItem('access_token', login.data.access_token)
      router.push('/home')
    }
  }

  return (
    <Container className="position-relative vh-100">
      <Head>
        <title>Login Your Credentials</title>
      </Head>
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col md={6} className="d-flex flex-column">
          <h1
            style={{
              fontSize: '3rem',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}
            className="text-danger"
          >
            StudyHopes.
          </h1>
          <span
            className="text-center"
          >
            Input your credentials
          </span>
          <Form
            className="px-5 pt-3 mx-5"
            onSubmit={(e) => loginHandler(e)}
          >
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control 
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formLogin.email}
                onChange={(e) => setForm(e)}
              />
            </FloatingLabel>
            <FloatingLabel 
              controlId="floatingPassword"
              label="Password"
            >
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formLogin.password}
                onChange={(e) => setForm(e)}
              />
            </FloatingLabel>
            <div className="d-flex align-items-center mt-4 flex-column">
              <Button 
                type="submit"
                variant="primary"
                className="w-50"
              >Login</Button>
              <p className="mt-2">
                Did't have an account ? register{' '}
                <Link href="/register">
                  <a  className="text-primary">here</a>
                </Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default login