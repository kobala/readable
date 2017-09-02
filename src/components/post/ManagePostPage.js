import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { bindActionCreators } from 'redux'
import PostForm from './PostForm'
import * as postActions from '../../actions/postActions'
import PropTypes from 'prop-types'

class ManagePostPage extends Component{
    state = {
        post: Object.assign({}, this.props.post),
        errors: {}
    }

    componentWillReceiveProps (nextProps){
        if(this.props.post.id !== nextProps.post.id)
            this.setState({post: Object.assign({}, nextProps.post)})
    }

    handleChange = (e) => {
        let { post } = this.state

        post[e.target.name] = e.target.value

        if(Object.keys(this.state.errors).length > 0){
            this.validateForm()
        }

        this.setState({ post })
    }

    validateForm = () => {
        let { post } = this.state
        let errors = {}
        let formIsValid = true

        //category
        if(!post["category"]){
            formIsValid = false
            errors["category"] = "Category is required"
        }

        //title
        if(!post["title"]){
            formIsValid = false
            errors["title"] = "Title is required"
        }

        //body
        if(!post["body"]){
            formIsValid = false
            errors["body"] = "Body is required"
        }

        //author
        if(!post["author"]){
            formIsValid = false
            errors["author"] = "Body is required"
        }

        this.setState({ errors })
        return formIsValid
    }

    onSave = (e) => {
        e.preventDefault()

        if(this.validateForm()){
            this.props.actions.savePost(this.state.post).then(() => this.redirect())
        }
    }

    redirect = () => {
        this.props.history.push("/")
    }

    render() {
        return (
            <PostForm
                post={this.state.post}
                categories={this.props.categories}
                onChange={this.handleChange}
                onSubmit={this.onSave}
                errors={this.state.errors}
            />
        )
    }
}

ManagePostPage.propTypes = {
    categories: PropTypes.array.isRequired,
    post: PropTypes.shape({
        author: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired
}

function getPostById (posts, postId) {
    const post = posts.filter(post => post.id === postId)

    return post ? post[0] : null
}

function mapStateToProps (state, ownProps) {
    const postId = ownProps.match.params.id

    let post = { title: '', body: '', author: '', category: '' }

    if(postId && state.posts.length > 0){
        post = getPostById(state.posts, postId)
    }

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
