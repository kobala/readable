import { combineReducers } from 'redux'
import posts from './postReducer'
import categories from './categoryReducer'
import filter from './filterReducer'
import postComments from './commentReducer'

const rootReducer = combineReducers({
    posts,
    categories,
    filter,
    postComments
})

export default rootReducer