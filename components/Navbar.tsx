import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Style
import { Navbar, Nav, Button } from "react-bootstrap"
import { navText } from "@styles/index"

const Navigation = () => {
  const router = useRouter()
  const [accessToken, setAccessToken] = useState('')
  
  // before rendering, set access token to state
  useEffect(() => {
    setAccessToken(localStorage.access_token)
  })

  // Do logout function
  const doLogout = (e) => {
    e.preventDefault(e)
    // Clean up loaclstorage
    localStorage.clear()
    // push to welcome page
    router.push('/')
  }
  return (
    <>
    <Head>
      <title>Homepage</title>
    </Head>
    <Navbar style={{zIndex: 10}}>
      <Navbar.Brand
        className="text-danger"
        css={navText}
      >StudyHopes.</Navbar.Brand>
      {
        accessToken && (
          <Nav className="ms-auto">
            <Button variant="warning" size="lg" onClick={(e) => doLogout(e)}>
              Logout
            </Button>
          </Nav>
        )
      }
    </Navbar>
    </>
  )
}

export default Navigation