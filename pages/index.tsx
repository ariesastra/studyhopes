import Head from 'next/head'
import Image from 'next/image'

// Components
import Header from '@components/Header'
import Navigation from '@components/Navbar'

// Style
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Head>
        <title>Study Hopes | Helping Your Study on Board</title>
      </Head>
      <Container>
        <Navigation />
        <Header />
      </Container>
      <Image
        alt='background'
        src="/background2.jpeg"
        layout='fill'
      />
    </>
  )
}