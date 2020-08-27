import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar className="mr-auto" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">LEARN HERO</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="https://www.programming-hero.com/">
                            More Courses
                        </Nav.Link>

                        <Nav.Link href="https://github.com/smswajan/e-learn">
                            GitHub
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
