import axios from '../api/axios';
import createDataContext from './createDataContext';


const blogReducer = (state, action) => {

    switch (action.type) {
        case 'allPosts':
            return action.payload

        case 'addBlogPost':
            return [...state, { ...action.payload }];

        case 'editPost':
            return state.map(blogPost => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost

            })
        case 'deletePost':
            return state.filter(blogPost => blogPost.id !== action.payload.id)


        default:
            return state;
    }



};
const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await axios.post(`/blogPosts`, { title, content })
        // dispatch({ type: 'addBlogPost', payload: { title, content } })
        if (callback) {
            callback();
        }

    }
}

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await axios.get('/blogPosts')
        dispatch({ type: 'allPosts', payload: response.data })
        // console.log(response.data)
    }
}


const editBlogPost = (dispatch) => {
    return async (title, content, id, callback) => {
        await axios.put(`/blogPosts/${id}`, { title, content })
        // dispatch({ type: 'editPost', payload: { title, content, id } })
        if (callback) {
            callback();
        }
    }

}

const deletePost = (dispatch) => {
    return async (id, callback) => {
        await axios.delete(`/blogPosts/${id}`)
        dispatch({ type: 'deletePost', payload: { id } })
        if (callback) callback();
    }
}


export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, editBlogPost, getBlogPosts, deletePost }, [])