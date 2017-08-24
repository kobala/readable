import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class ManagePostPage extends Component{
    state = {
        post: Object.assign({}, this.props.post)
    }

    componentWillReceiveProps(nextProps){
        if(this.props.post.id !== nextProps.post.id)
            this.setState({post: Object.assign({}, nextProps.post)})
    }

    render() {
        const { post } = this.state

        return (
            <div>
                <div className="page-header">
                    <h1>{post.title}</h1>
                </div>
                <p className="lead">{post.body}</p>
                <div>
                    <LinkContainer to={`/post/${post.id}/edit`}>
                        <Button bsStyle="default">Edit</Button>
                    </LinkContainer>&nbsp;
                    <Button bsStyle="danger">Delete</Button>
                </div>
            </div>
        )
    }
}

function getPostById (posts, postId) {
    const post = posts.filter(post => post.id === postId)
    if (post) return post[0]
    return null
}

function mapStateToProps (state, ownProps) {
    const postId = ownProps.match.params.id;

    let post = { title: '', body: '', author: '', category: '' }

    if(postId && state.posts.length > 0){
        post = getPostById(state.posts, postId)
    }

    return {
        post
    }
}

export default connect(mapStateToProps)(ManagePostPage)
