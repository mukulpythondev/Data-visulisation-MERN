import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// we are using bootstrap navbar
const Header = () => {
   
    return (
        <>
            <Navbar  className="header-text">
                <Container>
                    <Navbar.Brand>Data Visulization Dashboard</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header