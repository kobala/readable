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
                categories={this.props.categories}
                onChange={this.handleChange}
                errors={this.state.errors}
            />
        )
    }
}

function mapStateToProps (state) {
    let post = { title: '', body: '', author: '', category: '' }

    const categories = state.categories.map(category => {
        return {
            text: category.name.charAt(0).toUpperCase() + category.name.slice(1),
            value: category.name
        }
    })

    return {
        post,
        categories
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(postActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePostPage)
