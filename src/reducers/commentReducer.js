import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function commentReducer (state = initialState.postComments, action) {
    switch(action.type){
        case types.LOAD_POST_COMMENTS_SUCCESS :
            return action.comments
        case types.ADD_POST_COMMENT_SUCCESS :
            return [
                ...state,
                Object.assign({}, action.comment)
            ]
        case types.UPDATE_POST_COMMENT_SUCCESS :
            return [
                ...state.filter(comment => comment.id !== action.comment.id),
                Object.assign({}, action.comment)
            ]
        case types.DELETE_POST_COMMENT_SUCCESS :
            return [
                ...state.filter(comment => comment.id !== action.commentId)
            ]
        case types.VOTE_POST_COMMENT_SUCCESS :
            return [
                ...state.filter(comment => comment.id !== action.comment.id),
                Object.assign({}, action.comment)
            ]
        default :
            return state
    }
}