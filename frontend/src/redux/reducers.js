import {combineReducers} from 'redux'
import categories from './reducers/CategoryReducer'
import posts from './reducers/PostReducer'
import comments from './reducers/CommentReducer'

export default combineReducers({categories, posts, comments})
