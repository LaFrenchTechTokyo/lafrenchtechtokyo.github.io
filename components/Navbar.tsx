import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import styles from './Navbar.module.scss'

export default function MyNavbar() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Navbar
      fixed="top"
      bg={offset === 0 ? 'transparent' : 'light'}
      variant={offset === 0 ? 'dark' : 'light'}
    >
      <Container>
        <Navbar.Brand href="#page-top">
          <img src="/assets/img/navbar-logo.png" height="80" width="80" alt="..." />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#services">What we do</Nav.Link>
            <Nav.Link href="#portfolio">Who we are</Nav.Link>
            <Nav.Link href="#about">Our Community</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
