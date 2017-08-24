import { combineReducers } from 'redux'
import posts from './postReducer'
import categories from './categoryReducer'
import postsFilter from './filterReducer'

const rootReducer = combineReducers({
    posts,
    categories,
    postsFilter
})

export default rootReducer