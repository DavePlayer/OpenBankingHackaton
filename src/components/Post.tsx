import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postAction';
import React, { useEffect } from 'react';
//import postReducer from 'reduceres/postReducer';

const Post:React.FC = () => {
    
const dispatch = useDispatch();

const posts: any = useSelector((post: any) => post);
console.log(posts.posts.items);
    useEffect(()=>{
        dispatch(fetchPosts());
    }, [])

	return (
		<div>
			<h1>Posts</h1>
            {posts.posts.items.map((post: IPost) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
		</div> 
	);
}

interface IPost {
    id: number,
    title: string,
    body: string
}

export default Post;