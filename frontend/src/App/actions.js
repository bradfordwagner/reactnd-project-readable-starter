import {loadCategories} from '../Category/CategoryActions'
import {deletePost, getPost, loadAllPosts, loadPostsForCategory, saveNewPost, updateExistingPost, voteOnPost} from '../Post/PostAction'
import {addComment, deleteComment, editComment, loadCommentsForPost, voteOnComment} from "../Comment/CommentActions";

export default function (dispatch) {
    return {
        loadCategories: () => dispatch(loadCategories()),

        loadAllPosts: () => dispatch(loadAllPosts()),
        loadPostsForCategory: (category) => dispatch(loadPostsForCategory(category)),
        saveNewPost: post => dispatch(saveNewPost(post)),
        updatePost: post => dispatch(updateExistingPost(post)),
        deletePost: post => dispatch(deletePost(post)),
        voteOnPost: (post, status) => dispatch(voteOnPost(post, status)),
        getPost: postId => dispatch(getPost(postId)),

        loadCommentsForPost: (postId) => dispatch(loadCommentsForPost(postId)),
        addComment: comment => dispatch(addComment(comment)),
        editComment: comment => dispatch(editComment(comment)),
        deleteComment: comment => dispatch(deleteComment(comment)),
        voteOnComment: (comment, upOrDown) => dispatch(voteOnComment(comment, upOrDown))
    }
}
