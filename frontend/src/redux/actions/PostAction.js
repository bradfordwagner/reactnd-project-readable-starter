export const AddPosts = "ADD_POSTS"
export const UpdatePost = "UPDATE_POST"
export const RemovePost = "REMOVE_POST"

export const addPosts = (posts = {}) => {
    return {
        type: AddPosts,
        posts
    }
}

export const updatePost = (post = {}) => {
    return {
        type: UpdatePost,
        post
    }
}

export const removePost = (post = {}) => {
    return {
        type: RemovePost,
        post
    }
}
