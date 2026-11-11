import Container from 'react-bootstrap/Container';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { FaShoppingCart, FaUserCircle, FaSearch, FaShoppingBag } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function MyNavbar() {
    const userName = 'User';
    const cartCount = 0;
    const userdetail = JSON.parse(localStorage.getItem('Signup Data') || '{}');
    const [token, setToken] = useState(userdetail?.token || null);
    const navigate = useNavigate();

    const handleLogOut = () => {
        const userData = JSON.parse(localStorage.getItem('Signup Data') || '{}');
        delete userData.token;

        localStorage.setItem('Signup Data', JSON.stringify(userData));

        setToken(null);
        navigate('/login');
    }


    return (
        <BootstrapNavbar
            expand="lg"
            variant="dark"
            sticky="top"
            className="py-2 shadow-sm"
            style={{ backgroundColor: '#005a32' }}
        >
            <Container>

                <BootstrapNavbar.Brand
                    as={Link}
                    to="/home"
                    className="fs-4 py-0 me-lg-4 d-flex align-items-center"
                    style={{ fontFamily: "'Pacifico', cursive", letterSpacing: '0.5px' }}
                >
                    <FaShoppingBag className="me-2" />
                    Shopzy
                </BootstrapNavbar.Brand>

                <BootstrapNavbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="py-1 px-2"
                />

                <BootstrapNavbar.Collapse id="basic-navbar-nav">

                    <Form
                        className="flex-grow-1 mx-lg-4 my-3 my-lg-0"
                        style={{ maxWidth: '600px' }}
                    >
                        <InputGroup
                            size="sm"
                            style={{ flexWrap: 'nowrap', flexDirection: 'row' }}
                        >
                            <Form.Control
                                type="search"
                                placeholder="Search products..."
                                aria-label="Search"
                                className="border-0"
                            />
                            <Button
                                type="submit"
                                variant="light"
                                aria-label="Search"
                                className="d-flex align-items-center px-3 border-0"
                            >
                                <FaSearch />
                            </Button>
                        </InputGroup>
                    </Form>

                    <div className="d-flex align-items-center gap-4 ms-lg-auto">

                        <Link
                            to="/cart"
                            className="text-white fs-5 d-flex align-items-center position-relative"
                            aria-label="Cart"
                        >
                            <FaShoppingCart />
                            {cartCount > 0 && (
                                <Badge
                                    pill
                                    bg="warning"
                                    text="dark"
                                    className="position-absolute top-0 start-100 translate-middle"
                                    style={{ fontSize: '0.6rem' }}
                                >
                                    {cartCount}
                                </Badge>
                            )}
                        </Link>

                        {
                            token ? (
                                <Link
                                    to="/Profile"
                                    className="text-white text-decoration-none d-flex align-items-center gap-2"
                                    aria-label="Profile"
                                >
                                    <FaUserCircle className="fs-4" />
                                    <span className="small fw-medium">Hi, {userdetail.fullname}</span>
                                </Link>
                            ) :
                                null
                        }

                        {token ? (
                            <Button
                                onClick={handleLogOut}
                                variant="outline-light"
                                size="sm"
                                className="rounded-pill px-3"
                            >
                                Logout
                            </Button>
                        ) : (
                            <Button
                                as={Link}
                                to="/login"
                                variant="outline-light"
                                size="sm"
                                className="rounded-pill px-3"
                            >
                                Login
                            </Button>
                        )}

                    </div>

                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default MyNavbar;