import {setCategories} from './categoryActions'
import {addPosts} from './postsActions'

export default function(dispatch) {
    return {
        setCategories: (categories) => dispatch(setCategories(categories)),
        addPosts: posts => dispatch(addPosts(posts))
    }
}
