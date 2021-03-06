import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, FormGroup, Button, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'

function Header ({ categories, loading }) {
    return (
        <div>
            {loading && <ProgressBar />}
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Readable</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer exact to="/">
                            <NavItem eventKey={0}>Home</NavItem>
                        </LinkContainer>
                        {categories.map((category, key) => (
                                <LinkContainer to={`/${category.path}`} key={key}>
                                    <NavItem eventKey={++key}>{category.text}</NavItem>
                                </LinkContainer>
                            )
                        )}
                    </Nav>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <LinkContainer to="/create">
                                <Button bsStyle="success">Add post</Button>
                            </LinkContainer>
                        </FormGroup>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

Header.propTypes = {
    categories: PropTypes.array.isRequired
}

export default Header