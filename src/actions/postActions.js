import * as types from './actionTypes'
import * as readableAPI from '../utils/readableAPI'

export function loadPostsSuccess(posts) {
    return { type: types.LOAD_POSTS_SUCCESS, posts }
}

export function createPostSuccess(posts) {
    return { type: types.CREATE_POST_SUCCESS, posts }
}

export function updatePostSuccess(posts) {
    return { type: types.UPDATE_POST_SUCCESS, posts }
}

export function loadPosts () {
    return function (dispatch) {
        return readableAPI.getPosts().then(posts => {
            dispatch(loadPostsSuccess(posts))
        }).catch(error => {
            throw (error)
        })
    }
}

export function savePost (post) {
    return function (dispatch) {
        return readableAPI.addPost(post).then(savedPost => {
            post.id ? dispatch(updatePostSuccess(savedPost)) :
                dispatch(createPostSuccess)
        }).catch(error => {
            throw (error)
        })
    }
}