
export const AddPosts = "ADD_POSTS"

export const addPosts = (posts = {}) => {
    return {
        type: AddPosts,
        posts
    }
}