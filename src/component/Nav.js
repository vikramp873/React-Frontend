import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function NavBar() {

   return (
      <div>

         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand ><Link to="/" className='before-login' > MERN </Link> </Navbar.Brand>
               <Nav className="justify-content-end">
                  <Nav.Item>
                     <Nav.Link><Link to="/" className='before-login' /></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link><Link to="/counter-app" className='before-login'>Counter App</Link></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link > <Link to="/controlled-form" className='before-login'>Controlled Form</Link> </Nav.Link>
                  </Nav.Item>

               </Nav>
            </Container>
         </Navbar>



      </div>
   )
}

export default NavBar;
