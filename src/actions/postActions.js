import * as types from './actionTypes'
import * as readableAPI from '../utils/readableAPI'
import * as helpers from '../utils/helpers'
import { beginAjaxCall } from './ajaxStatusActions'

export function loadPostsSuccess (posts) {
    return { type: types.LOAD_POSTS_SUCCESS, posts }
}

export function createPostSuccess (post) {
    return { type: types.CREATE_POST_SUCCESS, post }
}

export function updatePostSuccess (post) {
    return { type: types.UPDATE_POST_SUCCESS, post }
}

export function deletePostSuccess (postId) {
    return { type: types.DELETE_POST_SUCCESS, postId }
}

export function votePostSuccess (post) {
    return { type: types.VOTE_POST_SUCCESS, post }
}

export function loadPosts () {
    return function (dispatch) {
        dispatch(beginAjaxCall())
        return readableAPI.getAllPosts().then(posts => {
            dispatch(loadPostsSuccess(posts))
        }).catch(error => {
            throw (error)
        })
    }
}

export function savePost (post) {
    return function (dispatch) {
        dispatch(beginAjaxCall())
        if(post.id){
            return readableAPI.editPost(post.id, post).then(savedPost => {
                dispatch(updatePostSuccess(savedPost))
            }).catch(error => {
                throw (error)
            })
        }

        return readableAPI.savePost(Object.assign(post, { id: helpers.guid(), timestamp: Date.now() })).then(savedPost => {
            dispatch(createPostSuccess(savedPost))
        }).catch(error => {
            throw (error)
        })
    }
}

export function deletePost (postId) {
    return function (dispatch) {
        dispatch(beginAjaxCall())
        return readableAPI.deletePost(postId).then(() => {
            dispatch(deletePostSuccess(postId))
        }).catch(error => {
            throw (error)
        })
    }
}

export function votePost (postId, option) {
    return function (dispatch) {
        return readableAPI.votePost(postId, option).then((post) => {
            dispatch(votePostSuccess(post))
        }).catch(error => {
            throw (error)
        })
    }
}