import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, FormGroup, FormControl, Button, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">Readable</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <LinkContainer to="/">
                    <NavItem eventKey={1}>Home</NavItem>
                </LinkContainer>
            </Nav>
            <Navbar.Form pullRight>
                <FormGroup>
                    <LinkContainer to="post/create">
                        <Button>Add post</Button>
                    </LinkContainer>
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" placeholder="Search" />
                </FormGroup>
            </Navbar.Form>
        </Navbar.Collapse>
    </Navbar>
)

export default Header
