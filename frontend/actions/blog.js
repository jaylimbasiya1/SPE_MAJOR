import fetch from 'isomorphic-fetch';
import { API } from '../config';
//http://localhost:8000/api
export const createBlog = (blog, token) => {
    return fetch(`http://localhost:8000/api/blog`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listBlogsWithCategoriesAndTags = () => {
    return fetch(`http://localhost:8000/api/blogs-categories-tags`, {
        method: 'POST',
        headers: {
            Accept: 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
