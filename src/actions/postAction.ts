import { FETCH_POSTS } from './types';

export const fetchPosts = () => (dispatch: any) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}