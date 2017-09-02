import React, { Component } from 'react'
import { Button, Col } from 'react-bootstrap'
import * as helpers from '../../utils/helpers'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import DeleteButton from '../common/DeleteButton'
import PostVoteForm from '../post/PostVoteForm'
import * as commentActions from '../../actions/commentActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

class PostInList extends Component {
    componentWillMount() {
        this.props.commentActions.loadPostComments(this.props.post.id)
    }

    render () {
        const { post, postComments } = this.props

        return(
            <Col xs={6} md={4}>
                <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
                <span>{helpers.formatDate(post.timestamp)}</span>
                <p>{post.body}</p>
                <p>By: <b>{post.author}</b></p>
                <p>Comments: <b>{postComments.length}</b></p>
                <PostVoteForm post={post} />
                <hr />
                <p>
                    <LinkContainer to={`/post/${post.id}`}>
                        <Button bsStyle="primary">Details</Button>
                    </LinkContainer>&nbsp;
                    <LinkContainer to={`/post/${post.id}/edit`}>
                        <Button bsStyle="default">Edit</Button>
                    </LinkContainer>&nbsp;
                    <DeleteButton
                        objectType="post"
                        itemId={post.id}
                    />
                </p>
            </Col>
        )
    }
}

function mapStateToProps (state, ownProps) {
    const postId = ownProps.post.id

    const postComments = state.postComments[postId] ?
        state.postComments[postId].filter(comment => comment.deleted === false)
        : []

    return {
        postComments
    }
}

function mapDispatchToProps (dispatch) {
    return {
        commentActions: bindActionCreators(commentActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostInList)