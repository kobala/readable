import React from 'react'
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'
import { Button } from 'react-bootstrap'

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
                defaultOption="Select Category"
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

export default PostForm