import {UpdateComment, AddComments} from '../actions/CommentActions'

export default function comments(state = {byId: {}}, action = {}) {
    const {byId} = state
    switch (action.type) {
        case AddComments:
            const {comments} = action
            comments.forEach(comment => byId[comment.id] = comment)
            return {...state, byId}
        case UpdateComment:
            const {comment} = action
            byId[comment.id] = comment
            return {...state, byId}
        default:
            return state
    }
}
