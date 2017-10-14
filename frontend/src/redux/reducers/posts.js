import {AddPosts} from "../actions/postsActions";

export default function posts(state = {byId: {}}, action = {}) {
    switch (action.type) {
        case AddPosts:
            const {posts} = action
            const {byId} = state
            posts.forEach(post => byId[post.id] = post)
            return {...state, byId}
        default:
            return state
    }
}