import {AddPosts, RemovePost, UpdatePost} from "../actions/PostAction";

export default function posts(state = {byId: {}}, action = {}) {
    const {byId} = state
    const {post} = action
    switch (action.type) {
        case AddPosts:
            const {posts} = action
            posts.forEach(post => byId[post.id] = post)
            return {...state, byId}
        case UpdatePost:
            byId[post.id] = post
            return {...state, byId}
        case RemovePost:
            // does the same as update since we don't actually delete we have a field that is marked for deletion and we filter based on it
            byId[post.id] = post
            return {...state, byId}
        default:
            return state
    }
}