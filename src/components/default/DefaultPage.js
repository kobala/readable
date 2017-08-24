import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from '../post/PostList'

class DefaultPage extends Component{
    render() {
        return (
            <div>
                <PostList posts={this.props.posts} />
            </div>
        );
    }
};

function mapStateToProps (state) {
    const { posts } = state

    return {
        posts
    }
}

export default connect(mapStateToProps)(DefaultPage)
