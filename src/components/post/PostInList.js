import React, { Component } from 'react'
import { Button, Col, Label, Glyphicon } from 'react-bootstrap'
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
            <Col xs={6} md={4} className="post-list-item">
                <div className="thumbnail">
                    <div className="caption">
                        <h3><Link to={`/${post.category}/${post.id}`}>{post.title}</Link></h3>
                        <p className="post-body">{post.body}</p>
                        <div className="post-details">
                            <p>
                                <Label bsStyle="default"><Glyphicon glyph="tag" /> {post.category} </Label>&nbsp;
                                <Label bsStyle="success"><Glyphicon glyph="comment" /> {postComments.length} </Label>
                            </p>
                            <p>
                                <Label bsStyle="primary"><Glyphicon glyph="user" /> {post.author} </Label>&nbsp;
                                <Label bsStyle="info"><Glyphicon glyph="time" /> {helpers.formatDate(post.timestamp)} </Label>
                            </p>
                            <PostVoteForm post={post} />
                            <br />
                            <p>
                                <LinkContainer to={`/${post.category}/${post.id}`}>
                                    <Button bsStyle="primary">Details</Button>
                                </LinkContainer>&nbsp;
                                <LinkContainer to={`/${post.category}/${post.id}/edit`}>
                                    <Button bsStyle="default">Edit</Button>
                                </LinkContainer>&nbsp;
                                <DeleteButton
                                    objectType="post"
                                    itemId={post.id}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
}

PostInList.propTypes = {
    post: PropTypes.shape({
        author: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }),
    postComments: PropTypes.array.isRequired
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