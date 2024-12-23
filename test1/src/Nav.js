
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Home';
import A from './A';
import Log from './Log';

function Na (){


return(
    <>
   
    <Navbar expand="lg" style={{ backgroundColor: 'transparent', position: 'absolute', top: 0, width: '100%', zIndex: 1000 }}>
        <Container>
          <Navbar.Brand  className="text-black"><Link to="/" style={{fontSize:"34px"}} className="text-decoration-none text-black"> Som3a</Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link  href='#Content us'  className="text-black" style={{fontSize:"30px"}}> Content us </Nav.Link>
              <Nav.Link  href='#services'  className="text-black" style={{fontSize:"30px"}}> service </Nav.Link>
              <Nav.Link href='#card'  className="text-black" style={{fontSize:"30px"}}>Card </Nav.Link>
              <Nav.Link  href="#about" className="text-black"> <Link to='/' className="text-decoration-none text-black" style={{fontSize:"30px"}}>About Us</Link> </Nav.Link>
              <Nav.Link> <Link to='/log' className="text-decoration-none text-black" style={{fontSize:"30px"}}>log in</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

 
      
      
    
    </>
)

}
export default Na;