import { useEffect, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'

// Components
import Header from '@components/List'
import Navigation from '@components/Navbar'

// Style
import { Container, Card } from 'react-bootstrap'

function home() {
  const [studies, setStudies] = useState([])
  useEffect( async () => {
    const getStudies = await axios.get('http://localhost:3000/api/studies')
    setStudies(getStudies.data)
  }, [])

  console.log(studies);
  

  return (
    <>
      <Container>
        <Navigation />
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default home