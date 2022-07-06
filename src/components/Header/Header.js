import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = function () {
    return (
        <div className="nav-border mb-3">
            <Navbar className="mx-3" expand="lg">
                <Navbar.Brand as={Link} to="/">eCommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} className="me-1" to="/">Home</Nav.Link>
                        <span className='mt-2 pipe' style={{"color":"gray"}}>|</span>
                        <Nav.Link as={Link} to="/myorders">My orders</Nav.Link>
                        <span className='mt-2 pipe' style={{"color":"gray"}}>|</span>
                        <Nav.Link as={Link} to="/cart  ">Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        </div>
        
    );
}
