import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { bindActionCreators } from 'redux'
import PostForm from './PostForm'
import * as postActions from '../../actions/postActions'

class ManagePostPage extends Component{
    state = {
        post: Object.assign({}, this.props.post),
        errors: {}
    }

    handleChange = (e) => {
        let { post } = this.state
        post[e.target.name] = e.target.value
        this.setState({ post })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.actions.createPost(this.state)
    }

    render() {
        return (
            <PostForm
                post={this.state.post}
                categories={[]}
                onChange={this.handleChange}
                errors={this.state.errors}
            />
        )
    }
}

function mapStateToProps (state, ownProps) {
    let post = { title: '', body: '', author: '', category: null }
    return {
        post,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(postActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePostPage)
