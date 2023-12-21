import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './NavBar.css';
import Logo from "../assets/cts logo2.png"
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useCategory } from "../../hooks/useCategory";

const NavBar = () => {

    const {category} = useCategory();
    
    
    const cartItemCount = 2;
    return (
        <>
            <Navbar className="mynavbar" bg="none" >
                <Container className="d-flex justify-content-between">
                    <Link to='/'>
                        <img
                            src={Logo}
                            alt="Logo2"
                            height="65"
                            className="d-inline-block align-top"
                        />
                    </Link>
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                        <NavDropdown title='Products' id='basic-nav-dropdown'>
                            {category.map((item, index) => (
                                <NavDropdown.Item key={index}>
                                <Link to={`/category/${item}`}>{item}</Link>
                            </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <CartWidget itemCount={cartItemCount} />
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
