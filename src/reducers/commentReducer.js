import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function commentReducer (state = initialState.postComments, action) {
    switch(action.type){
        case types.LOAD_POST_COMMENTS_SUCCESS :
            return {
                ...state,
                [action.parentId]: action.comments
            }
        case types.ADD_POST_COMMENT_SUCCESS :
            return {
                ...state,
                [action.parentId]: state[action.parentId].concat(action.comment)
            }
        case types.UPDATE_POST_COMMENT_SUCCESS :
            return {
                ...state,
                [action.parentId]: state[action.parentId].map(comment => {
                    return comment.id === action.comment.id ? action.comment : comment
                })
            }
        case types.DELETE_POST_COMMENT_SUCCESS :
            let filterDeletedPost = {}

            Object.keys(state).forEach(postId => {
                filterDeletedPost[postId] = state[postId].filter(comment => comment.id !== action.commentId)
            })

            return filterDeletedPost
        case types.VOTE_POST_COMMENT_SUCCESS :
            let updateCommentVote = {}

            Object.keys(state).forEach(postId => {
                updateCommentVote[postId] = state[postId].map(comment => {
                    return comment.id === action.comment.id ? action.comment : comment
                })
            })

            return updateCommentVote
        default :
            return state
    }
}