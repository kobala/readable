import React, { Component } from 'react'
import PostList from '../post/PostList'
import PropTypes from 'prop-types'

class PostsPage extends Component{
    render() {
        return (
            <div>
                <PostList category={this.props.match.params.category}/>
            </div>
        );
    }
}

PostsPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
           category: PropTypes.string.isRequired
        }).isRequired,
    }).isRequired
}

export default PostsPage
