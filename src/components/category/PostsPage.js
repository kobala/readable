import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from '../post/PostList'

class PostsPage extends Component{
    render() {
        return (
            <div>
                <PostList posts={this.props.posts} />
            </div>
        );
    }
};

function mapStateToProps (state, ownProps) {
    let { posts } = state

    posts = posts.filter(post => post.category === ownProps.match.params.category)

    return {
        posts
    }
}

export default connect(mapStateToProps)(PostsPage)
