import React, { Component } from 'react'
import PostList from '../post/PostList'
import PropTypes from 'prop-types'

class PostsPage extends Component{
    render () {
        const { category } = this.props.match.params

        return (
            <div>
                <h4>Category: {category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <hr />
                <PostList category={category}/>
            </div>
        )
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
