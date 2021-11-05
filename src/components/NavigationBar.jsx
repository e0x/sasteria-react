import React from 'react'
// import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import OrderTable from './Orders/OrderTable';

function NavigationBar() {
    return (
        <div>
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">Sastreria:</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <Nav.Link as={Link} to="/Order">Orders</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="container">
                    <Switch>
                        <Route path="/Order">
                            <OrderTable></OrderTable>
                        </Route>
                    </Switch>
                </div>

            </Router>
        </div>
    )
}


export default NavigationBar;