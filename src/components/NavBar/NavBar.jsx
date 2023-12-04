import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './NavBar.css';
import Logo from "../assets/cts logo2.png"
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    const cartItemCount = 0;
    return (
        <>
            <Navbar className="mynavbar" bg="none" >
                <Container className="d-flex justify-content-between">
                    <Navbar.Brand href="#home">
                        <img
                        src={Logo}
                        alt="Logo2"
                        height="65"
                        className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Product</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    <CartWidget itemCount={cartItemCount} />
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
