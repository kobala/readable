import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import DeleteButton from '../common/DeleteButton'
import PostVoteForm from './PostVoteForm'
import PostCommentList from './comment/PostCommentList'
import PostCommentBox from './comment/PostCommentBox'
import * as commentActions from '../../actions/commentActions'
import PropTypes from 'prop-types'


class PostDetailsPage extends Component{
    state = {
        postComments: [],
        comment: { author: '', body: '' },
        commentErrors: {}
    }

    componentDidMount () {
        this.props.commentActions.loadPostComments(this.props.match.params.id).then(() => {
            const { postComments } = this.props
            this.setState({ postComments })
        })
    }

    handleInputChange = (e) => {
        let { comment } = this.state

        comment[e.target.name] = e.target.value

        if(Object.keys(this.state.commentErrors).length > 0){
            this.validateForm()
        }

        this.setState({ comment })
    }

    onCommentSubmit = (e) => {
        e.preventDefault()

        if(this.validateForm()){
            this.props.commentActions.savePostComment(this.props.post.id, this.state.comment)

            this.setState({ comment: { author: '', body: '' } })
        }
    }

    onCommentEdit = (comment) => {
        this.setState({ comment })
    }

    validateForm = () => {
        let { comment } = this.state
        let commentErrors = {}
        let formIsValid = true

        //author
        if (!comment["author"]) {
            formIsValid = false
            commentErrors["author"] = "Author is required"
        }

        //body
        if (!comment["body"]) {
            formIsValid = false
            commentErrors["body"] = "Body is required"
        }

        this.setState({ commentErrors })

        return formIsValid
    }

    render () {
        const { post } = this.props

        const { postComments } = this.state

        return (
            <div>
                <div className="page-header">
                    <h1>{post.title}</h1>
                </div>
                <p className="lead">{post.body}</p>
                <div>
                    <PostVoteForm post={post} />
                </div>
                <br/>
                <div>
                    <LinkContainer to={`/post/${post.id}/edit`}>
                        <Button bsStyle="default">Edit</Button>
                    </LinkContainer>&nbsp;
                    <DeleteButton
                        objectType="post"
                        itemId={post.id}
                        redirectAfterSuccess={true}
                    />
                </div>
                <br />
                <div>
                    <PostCommentBox
                        onChange={this.handleInputChange}
                        onSubmit={this.onCommentSubmit}
                        comment={this.state.comment}
                        errors={this.state.commentErrors}
                    />
                </div>
                <div>
                    <PostCommentList
                        comments={postComments}
                        onCommentEdit={this.onCommentEdit}
                        loading={this.props.loading}
                    />
                </div>
            </div>
        )
    }
}

PostDetailsPage.propTypes = {
    post: PropTypes.shape({
        author: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired,
    postComments: PropTypes.array.isRequired
}

function getPostById (posts, postId) {
    const post = posts.filter(post => post.id === postId)

    return post ? post[0] : null
}

function mapStateToProps (state, ownProps) {
    const postId = ownProps.match.params.id

    const { postComments, ajaxCallsInProgress } = state

    let post = { title: '', body: '', author: '', category: '' }

    if(postId && state.posts.length > 0){
        post = getPostById(state.posts, postId)
    }

    return {
        post,
        postComments,
        loading: ajaxCallsInProgress
    }
}

function mapDispatchToProps (dispatch) {
    return {
        commentActions: bindActionCreators(commentActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsPage)
