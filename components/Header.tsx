import Link from 'next/link'

// Style
import {main, title} from '../pages/styles'
import { Row, Col, Button } from 'react-bootstrap'

const Header = () => { 
  return (
    <header css={main}>
      <Row>
        <Col md={6}>
          <h1 css={title} className="text-danger">
            StudyHopes. Helping your Study on Track.
          </h1>
        </Col>
        <Col md={12}>
          <Link href="/login">
            <Button size="lg" variant="light">
              Login
            </Button>
          </Link>
        </Col>
      </Row>
    </header>
  )
}

export default Header