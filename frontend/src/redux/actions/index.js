import {setCategories} from './CategoryActions'
import {addPosts, removePost, updatePost} from './PostAction'
import {addComments, updateComment} from "./CommentActions";

export default function (dispatch) {
    return {
        setCategories: categories => dispatch(setCategories(categories)),
        addPosts: posts => dispatch(addPosts(posts)),
        updatePost: post => dispatch(updatePost(post)),
        removePost: post => dispatch(removePost(post)),
        addComments: comments => dispatch(addComments(comments)),
        updateComment: comment => dispatch(updateComment(comment))
    }
}
