const api = "https://fathomless-garden-97937.herokuapp.com"

let token = localStorage.token

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getAllCategories = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)

export const getAllPosts = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())

export const savePost = (post) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(res => res.json())

export const votePost = (postId, option) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option })
    }).then(res => res.json())

export const editPost = (postId, postDetails) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postDetails)
    }).then(res => res.json())

export const deletePost = (postId) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    })

export const getCommentsByPostId = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, { headers })
        .then(res => res.json())

export const saveComment = (comment) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    }).then(res => res.json())

export const voteComment = (commentId, option) =>
    fetch(`${api}/comments/${commentId}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option })
    }).then(res => res.json())

export const editComment = (commentId, commentDetails) =>
    fetch(`${api}/comments/${commentId}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentDetails)
    }).then(res => res.json())

export const deleteComment = (commentId) =>
    fetch(`${api}/comments/${commentId}`, {
        method: 'DELETE',
        headers: headers
    })