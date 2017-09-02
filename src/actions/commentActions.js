import * as types from './actionTypes'
import * as readableAPI from '../utils/readableAPI'
import * as helpers from '../utils/helpers'
import { beginAjaxCall } from './ajaxStatusActions'

export function loadPostCommentsSuccess (comments) {
    return { type: types.LOAD_POST_COMMENTS_SUCCESS, comments }
}

export function addPostCommentSuccess (comment) {
    return { type: types.ADD_POST_COMMENT_SUCCESS, comment }
}

export function updatePostCommentSuccess (comment) {
    return { type: types.UPDATE_POST_COMMENT_SUCCESS, comment }
}

export function deletePostCommentSuccess (commentId) {
    return { type: types.DELETE_POST_COMMENT_SUCCESS, commentId }
}

export function votePostCommentSuccess (comment) {
    return { type: types.VOTE_POST_COMMENT_SUCCESS, comment }
}

export function loadPostComments (postId) {
    return dispatch => {
        dispatch(beginAjaxCall())

        return readableAPI.getCommentsByPostId(postId).then(comments => {
            dispatch(loadPostCommentsSuccess(comments))
        }).catch(error => {
            throw (error)
        })
    }
}

export function savePostComment (parentId, comment) {
    return dispatch => {
        dispatch(beginAjaxCall())

        if(comment.id){
            return readableAPI.editComment(comment.id, comment).then(savedComment => {
                dispatch(updatePostCommentSuccess(savedComment))
            }).catch(error => {
                throw (error)
            })
        }

        return readableAPI.saveComment(Object.assign(comment, { id: helpers.guid(), timestamp: Date.now(), parentId })).then(savedComment => {
            dispatch(addPostCommentSuccess(savedComment))
        }).catch(error => {
            throw (error)
        })
    }
}

export function deletePostComment (commentId, option) {
    return dispatch => {
        dispatch(beginAjaxCall())

        return readableAPI.deleteComment(commentId).then(() => {
            dispatch(deletePostCommentSuccess(commentId))
        }).catch(error => {
            throw (error)
        })
    }
}

export function votePostComment (commentId, option) {
    return dispatch => {
        return readableAPI.voteComment(commentId, option).then((comment) => {
            dispatch(votePostCommentSuccess(comment))
        }).catch(error => {
            throw (error)
        })
    }
}