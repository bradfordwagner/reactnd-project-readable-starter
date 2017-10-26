import API from '../api/index'
import {AddPosts, UpdatePost} from "../App/ActionTypes";

const addPosts = (posts = {}) => {
    return {
        type: AddPosts,
        posts
    }
}

const updatePost = (post = {}) => {
    return {
        type: UpdatePost,
        post
    }
}

export const loadAllPosts = () => dispatch => API.getAllPosts().then(posts => dispatch(addPosts(posts)))

export const saveNewPost = post => dispatch => API.savePost(post).then(post => dispatch(updatePost(post)))

export const updateExistingPost = post => dispatch => API.updatePost(post).then(post => dispatch(updatePost(post)))

export const deletePost = post => dispatch => API.deletePost(post).then(post => dispatch(updatePost(post)))

export const voteOnPost = (post, status) => dispatch => API.voteOnPost(post, status).then(post => dispatch(updatePost(post)))

export const loadPostsForCategory = category => dispatch => API.getPostsForCategory(category).then(posts => dispatch(addPosts(posts)))

export const getPost = postId => dispatch => API.getPost(postId).then(post => dispatch(updatePost(post)))
