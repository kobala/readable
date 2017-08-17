import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import  { bindActionCreators } from 'redux'
import * as postActions from '../../actions/postActions'

class ManagePostPage extends Component{
    state = {
        title: '',
        body: '',
        author: '',
        category: null
    }

    handleChange = (key) => {
        return (e) => {
            this.setState({ [key]: e.target.value })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.actions.createPost(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup
                    controlId="addPost"
                >
                    <ControlLabel>Title</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.title}
                        placeholder="Title"
                        onChange={this.handleChange('title')}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                    controlId="addPost"
                >
                    <ControlLabel>Body</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.body}
                        placeholder="Body"
                        onChange={this.handleChange('body')}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                    controlId="addPost"
                >
                    <ControlLabel>Author</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.author}
                        placeholder="Author"
                        onChange={this.handleChange('author')}
                    />
                    <FormControl.Feedback />
                </FormGroup>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        )
    }
}

function mapStateToProps (state, ownProps) {
    return {
        posts: state.posts,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(postActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePostPage)
