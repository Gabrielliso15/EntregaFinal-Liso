import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './NavBar.css';
import Logo from "../assets/cts logo2.png"
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
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
                        <Nav.Link href="#Product">Product</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                    <CartWidget itemCount={cartItemCount} />
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
