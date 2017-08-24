import React, { Component } from 'react'
import PostList from '../post/PostList'

class PostsPage extends Component{
    render() {
        return (
            <div>
                <PostList category={this.props.match.params.category}/>
            </div>
        );
    }
}

export default PostsPage
