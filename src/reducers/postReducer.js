import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function postReducer (state = initialState.posts, action) {
    switch(action.type){
        case types.LOAD_POSTS_SUCCESS :
            return action.posts
        case types.CREATE_POST_SUCCESS :
            return [
                ...state,
                Object.assign({}, action.post)
            ]
        case types.UPDATE_POST_SUCCESS :
            return [
                ...state.filter(post => post.id !== action.post.id),
                Object.assign({}, action.post)
            ]
        case types.DELETE_POST_SUCCESS :
            return [
                ...state.filter(post => post.id !== action.postId)
            ]
        case types.VOTE_POST_SUCCESS :
            return [
                ...state.filter(post => post.id !== action.post.id),
                Object.assign({}, action.post)
            ]
        default :
            return state
    }
}