import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Header.css'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
      
        <img className='img' src="https://i.postimg.cc/ncDsPrRn/2640815.webp" alt="" />
          <Navbar.Brand className='font' href=""> <span>V</span>ideooo <span>U</span>ploader</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          
          
        </Container>
      </Navbar>
    </div>
  )
}

export default Header