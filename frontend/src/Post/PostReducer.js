import {AddPosts, UpdatePost} from "../App/ActionTypes";

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
        default:
            return state
    }
}
