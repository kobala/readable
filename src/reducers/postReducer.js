import * as types from '../actions/actionTypes'

export default function postReducer (state = [], action) {
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
        default :
            return state
    }
}