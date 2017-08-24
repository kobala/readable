import React from 'react'
import { Button, Glyphicon, Label } from 'react-bootstrap'

function PostVoteForm ({ post }) {
    return(
        <div>
            <Button bsSize="xsmall"><Glyphicon glyph="chevron-up" /></Button>
            &nbsp;<Label bsStyle={post.voteScore >= 0 ? 'success' : 'danger'}>{post.voteScore}</Label>&nbsp;
            <Button bsSize="xsmall"><Glyphicon glyph="chevron-down" /></Button>
        </div>
    )
}

export default PostVoteForm