import {setCategories} from './CategoryActions'
import {addPosts} from './PostAction'

export default function(dispatch) {
    return {
        setCategories: (categories) => dispatch(setCategories(categories)),
        addPosts: posts => dispatch(addPosts(posts))
    }
}
