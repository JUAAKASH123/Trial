import Container from 'react-bootstrap/Container';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from 'react-icons/fa';
import Home from './home';
import { Link } from 'react-router-dom';

function Nav2() {
    return (
        <BootstrapNavbar expand="lg" className="bg-body-tertiary">
            <Container>

                {/* Brand */}
                <BootstrapNavbar.Brand as={Link} to="/home" style={{ cursor: 'pointer' }}>
                    ecommerce website 
                </BootstrapNavbar.Brand>

                {/* Toggle for mobile */}
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

                <BootstrapNavbar.Collapse id="basic-navbar-nav">

                    {/* Search Bar - Center */}
                    <Form className="d-flex mx-auto my-3 my-lg-0"
                        style={{ width: '50%' }}>
                        <Form.Control
                            type="search"
                            placeholder="Search products..."
                            aria-label="Search"
                        />
                        <Button variant="outline-success" className="ms-2">
                            Search
                        </Button>
                    </Form>

                    {/* Cart and Login/Signup */}
                    <div className="d-flex align-items-center gap-3">

                        <Button variant="outline-dark">
                            <FaShoppingCart /> Cart
                        </Button>

                    </div>

                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default Nav2;
