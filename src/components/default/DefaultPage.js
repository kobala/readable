import React  from 'react'
import PostList from '../post/PostList'
import DocumentTitle from 'react-document-title'

function DefaultPage () {
    return (
        <DocumentTitle title='Readable - Homepage'>
            <div>
                <PostList />
            </div>
        </DocumentTitle>
    )
}

export default DefaultPage
