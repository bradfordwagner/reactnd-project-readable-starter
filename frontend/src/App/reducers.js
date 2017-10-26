import {combineReducers} from 'redux'
import categories from '../Category/CategoryReducer'
import posts from '../Post/PostReducer'
import comments from '../Comment/CommentReducer'

export default combineReducers({categories, posts, comments})
