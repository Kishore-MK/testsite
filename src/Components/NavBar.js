import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../Logo.png'
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function OffcanvasExample() {
  return (
    <>
      <div>
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
            <Container fluid>
              <Link to='/Home'>
                <Navbar.Brand><img style={{height:"30px", width:"100px", left:"30px"}} src={Logo} alt=''></img></Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    DashBoard
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link style={{color:"black",textDecorationLine:'none'}} to='/AskLead'><p>Ask Lead</p></Link>
                    <Link style={{color:"black",textDecorationLine:'none'}} to='/LeaderBoard'><p>Leader Board</p></Link>
                    <Link style={{color:"black",textDecorationLine:'none'}} to='/ApplicationStatus'><p>Application Status</p></Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}

export default OffcanvasExample;