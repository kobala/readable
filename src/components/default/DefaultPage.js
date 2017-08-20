import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import * as helpers from '../../utils/helpers'

class DefaultPage extends Component{

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        {this.props.posts.map((post, key) => (
                            <Col xs={6} md={4} key={key}>
                                <h3>{post.title}</h3>
                                <span>{helpers.formatDate(post.timestamp)}</span>
                                <p>{post.body}</p>
                                <p>
                                    <Button bsStyle="primary">Show more</Button>&nbsp;
                                    <Button bsStyle="danger">Delete</Button>
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
