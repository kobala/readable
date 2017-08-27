import React from 'react'
import TextInput from '../../common/TextInput'
import TextareaInput from '../../common/TextareaInput'
import { Button, Well } from 'react-bootstrap'
import PropTypes from 'prop-types'

function PostCommentBox ({comment, onSubmit, onChange, loading, errors}) {
    return (
        <Well>
            <legend className="the-legend">Comment</legend>
            <form onSubmit={onSubmit}>
                <TextInput
                    name="author"
                    placeholder="Author"
                    value={comment.author}
                    onChange={onChange}
                    error={errors.author}
                />
                <TextareaInput
                    name="body"
                    placeholder="Body"
                    value={comment.body}
                    onChange={onChange}
                    error={errors.body}
                />
                <Button
                    type="submit"
                    disabled={loading}
                >
                    {comment.id ? 'Edit Comment' : 'Add Comment'}
                </Button>
            </form>
        </Well>
    )
}

PostCommentBox.propTypes = {
    comment: PropTypes.shape({
        author: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.shape({
        author: PropTypes.string,
        body: PropTypes.string
    }),
}

export default PostCommentBox