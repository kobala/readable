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

        if(this.state.errors){
            this.validateForm()
        }
        
        this.setState({ post })
    }

    validateForm = () => {
        let post = this.state.post;
        let errors = {};
        let formIsValid = true;

        //category
        if(!post["category"]){
            formIsValid = false;
            errors["category"] = "Category is required";
        }

        //title
        if(!post["title"]){
            formIsValid = false;
            errors["title"] = "Title is required";
        }

        //body
        if(!post["body"]){
            formIsValid = false;
            errors["body"] = "Body is required";
        }

        //author
        if(!post["author"]){
            formIsValid = false;
            errors["author"] = "Body is required";
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    onSave = (event) => {
        event.preventDefault()
        if(this.validateForm()){
            this.props.actions.savePost(this.state.post)
            this.props.history.push("/")
        }
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
