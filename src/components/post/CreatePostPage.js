import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class CreatePostPage extends Component{
    state = {
        title: '',
        body: '',
        author: '',
        categoryId: null
    }

    handleChange = (key) => {
        return (e) => {
            this.setState({ [key]: e.target.value })
        }
    }

    render() {
        return (
            <form>
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


export default CreatePostPage
