import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap'
import * as helpers from '../../utils/helpers'
import { LinkContainer } from 'react-router-bootstrap'
import DeletePostButton from '../post/DeletePostButton'

function PostList ({posts}) {
    return (
        <Grid>
            <ButtonGroup>
                <DropdownButton title="Dropdown" id="bg-nested-dropdown">
                    <MenuItem eventKey="order-none">Sort By</MenuItem>
                    <MenuItem eventKey="order-voteScore">Vote Score</MenuItem>
                    <MenuItem eventKey="order-timestamp">Date - Oldest to Newest</MenuItem>
                    <MenuItem eventKey="order-timestamp">Date - Newest to Oldest</MenuItem>
                </DropdownButton>
            </ButtonGroup>
            <Row>
                {posts.filter(post => !post.deleted).map((post, key) => (
                    <Col xs={6} md={4} key={key}>
                        <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
                        <span>{helpers.formatDate(post.timestamp)}</span>
                        <p>{post.body}</p>
                        <p>
                            <LinkContainer to={`/post/${post.id}`}>
                                <Button bsStyle="primary">Details</Button>
                            </LinkContainer>&nbsp;
                            <LinkContainer to={`/post/${post.id}/edit`}>
                                <Button bsStyle="default">Edit</Button>
                            </LinkContainer>&nbsp;
                            <DeletePostButton postId={post.id}/>
                        </p>
                    </Col>
                ))}
            </Row>
        </Grid>
    )
}

export default PostList