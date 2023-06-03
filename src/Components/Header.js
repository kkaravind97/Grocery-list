import React from 'react'
import {Navbar,Container} from 'react-bootstrap';

const Header = ({title}) => {
  return (
    <header className=''>
        <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='m-auto'><h3>{title}</h3></Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
