import React from 'react'
import {Button, FormControl, Navbar, Nav, Form} from 'react-bootstrap';

const Menu = () => {

    return (
        <div >

            <div>
                <h1>
                    <> <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/rootadmin">Adminpanel</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
                </>
            </h1>
        </div>
    </div>
    )
}

export default Menu