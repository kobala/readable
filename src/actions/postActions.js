import * as types from './actionTypes'
import * as readableAPI from '../utils/readableAPI'
import * as helpers from '../utils/helpers'

export function loadPostsSuccess(posts) {
    return { type: types.LOAD_POSTS_SUCCESS, posts }
}

export function createPostSuccess(post) {
    return { type: types.CREATE_POST_SUCCESS, post }
}

export function updatePostSuccess(post) {
    return { type: types.UPDATE_POST_SUCCESS, post }
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
        if(post.id){
            return readableAPI.editPost(post.id, post).then(savedPost => {
                dispatch(createPostSuccess(savedPost))
            }).catch(error => {
                throw (error)
            })
        }

        return readableAPI.addPost(Object.assign(post, { id: helpers.guid(), timestamp: Date.now() })).then(savedPost => {
            dispatch(createPostSuccess(savedPost))
        }).catch(error => {
            throw (error)
        })
    }
}