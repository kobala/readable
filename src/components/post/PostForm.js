import React from 'react'
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

function PostForm ({post, categories, onSubmit, onChange, loading, errors}) {
    return (
        <form onSubmit={onSubmit}>
            <SelectInput
                name="category"
                label="Category"
                value={post.category}
                onChange={onChange}
                error={errors.category}
                options={categories}
                defaultOption={{text: 'Select Category', value: ''}}
            />
            <TextInput
                name="title"
                label="Title"
                value={post.title}
                onChange={onChange}
                error={errors.title}
            />
            <TextInput
                name="body"
                label="Body"
                value={post.body}
                onChange={onChange}
                error={errors.body}
            />
            <TextInput
                name="author"
                label="Author"
                value={post.author}
                onChange={onChange}
                error={errors.author}
            />
            <Button
                type="submit"
                disabled={loading}
            >
                {loading ? 'Saving...' : 'Save'}
            </Button>
        </form>
    )
}

PostForm.propTypes = {
    post: PropTypes.shape({
        author: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired,
    categories: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.shape({
        author: PropTypes.string,
        body: PropTypes.string,
        category: PropTypes.string,
        title: PropTypes.string
    })
}

export default PostForm