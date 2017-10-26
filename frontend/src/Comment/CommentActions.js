import API from '../api/index'
import {AddComments, UpdateComment} from "../App/ActionTypes";

const addComments = (comments = []) => {
    return {type: AddComments, comments}
}

const updateComment = (comment = {}) => {
    return {type: UpdateComment, comment}
}

export const editComment = (comment = {}) => {
    return dispatch => API.editComment(comment).then(comment => dispatch(updateComment(comment)))
}

export const addComment = (comment = {}) => dispatch => API.addComment(comment).then(comment => dispatch(updateComment(comment)))

export const deleteComment = (comment = {}) => dispatch => API.deleteComment(comment).then(comment => dispatch(updateComment(comment)))

export const voteOnComment = (comment, upOrDown) => dispatch => API.voteOnComment(comment, upOrDown).then(comment => dispatch(updateComment(comment)))

export const loadCommentsForPost = (postId) => dispatch => API.getCommentsForPost({id: postId}).then(comments => dispatch(addComments(comments)))
