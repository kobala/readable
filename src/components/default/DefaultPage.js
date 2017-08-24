import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import * as helpers from '../../utils/helpers'
import { LinkContainer } from 'react-router-bootstrap'
import DeletePostButton from '../post/DeletePostButton'

class DefaultPage extends Component{
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        {this.props.posts.filter(post => !post.deleted).map((post, key) => (
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
            </div>
        );
    }
};

function mapStateToProps (state) {
    const { posts } = state

    return {
        posts
    }
}

export default connect(mapStateToProps)(DefaultPage)
