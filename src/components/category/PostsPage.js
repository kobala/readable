import React, { Component } from 'react'
import PostList from '../post/PostList'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title'

class PostsPage extends Component{
    render () {
        const { category } = this.props.match.params

        const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

        return (
            <DocumentTitle title={`Readable - ${categoryTitle}`}>
                <div>
                    <h4>Category: {categoryTitle}</h4>
                    <hr />
                    <PostList category={category}/>
                </div>
            </DocumentTitle>
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
