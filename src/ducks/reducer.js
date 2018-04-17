import axios from 'axios';

const initialState = {
    posts: [],
    onePost: {},
    author: {},
    pictures: [],
    comments: []
}

const GET_POSTS = "GET_POSTS";
const GET_ONE_POST = "GET_ONE_POST";
const GET_AUTHOR = "GET_AUTHOR";
const GET_PICTURES = "GET_PICTURES";
const GET_COMMENTS = "GET_COMMENTS";

export function getPosts() {
    let postData = axios.get('https://jsonplaceholder.typicode.com/posts').then(posts => {
        // let postsArray = [];
        // for (var i = 0; i < posts.data.length; i++) {
        //     let post = posts.data[i]
        //     axios.get('https://jsonplaceholder.typicode.com/users/' + posts.data[i].userId).then(author => {
        //         post.author = author.data.name
        //     })
        //     postsArray.push(post)
        // }
        return posts.data
    })
    return {
        type: GET_POSTS,
        payload: postData
    }
}

export function getOnePost(id) {
    let postData = axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(post => {
        return post.data
    })
    return {
        type: GET_ONE_POST,
        payload: postData
    }
}

export function getAuthor(id) {
    let authorData = axios.get('https://jsonplaceholder.typicode.com/users/' + id).then(author => {
        return author.data
    })
    return {
        type: GET_AUTHOR,
        payload: authorData
    }
}

export function getPictures() {
    let pictureData = axios.get('https://jsonplaceholder.typicode.com/photos').then(pictures => {
        return pictures.data
    })
    return {
        type: GET_PICTURES,
        payload: pictureData
    }
}

export function getComments(id) {
    let commentData = axios.get('https://jsonplaceholder.typicode.com/comments?postId='+id).then(comments => {
        return comments.data
    })
    return {
        type: GET_COMMENTS,
        payload: commentData
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS + "_FULFILLED":
            return Object.assign({}, state, { posts: action.payload })
        case GET_ONE_POST + "_FULFILLED":
            return Object.assign({}, state, { onePost: action.payload })
        case GET_AUTHOR + "_FULFILLED":
            return Object.assign({}, state, { author: action.payload })
        case GET_PICTURES + "_FULFILLED":
            return Object.assign({}, state, { pictures: action.payload })
        case GET_COMMENTS + "_FULFILLED":
            return Object.assign({}, state, { comments: action.payload })
        default: return state
    }
}