import {setCategories} from './CategoryActions'
import {addPosts, removePost, updatePost} from './PostAction'

export default function (dispatch) {
    return {
        setCategories: categories => dispatch(setCategories(categories)),
        addPosts: posts => dispatch(addPosts(posts)),
        updatePost: post => dispatch(updatePost(post)),
        removePost: post => dispatch(removePost(post))
    }
}
