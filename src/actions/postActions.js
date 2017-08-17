import * as types from './actionTypes'
import * as readableAPI from '../utils/readableAPI'

export function createPost (course) {
    return { type: types.CREATE_POST, course }
}

export function loadPostsSuccess(posts) {
    return { type: types.LOAD_POSTS_SUCCESS, posts }
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