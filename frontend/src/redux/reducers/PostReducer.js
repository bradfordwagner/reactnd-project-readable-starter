import {AddPosts, UpdatePost} from "../actions/PostAction";

export default function posts(state = {byId: {}}, action = {}) {
    const {byId} = state
    switch (action.type) {
        case AddPosts:
            const {posts} = action
            posts.forEach(post => byId[post.id] = post)
            return {...state, byId}
        case UpdatePost:
            const {post} = action
            byId[post.id] = post
            return {...state, byId}
        default:
            return state
    }
}