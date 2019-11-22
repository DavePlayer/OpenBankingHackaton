import React from 'react';
import { useState} from 'react';

const PostForm:React.FC = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        const post = {
            title: title,
            body: body
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
	return (
		<div>
			<h1>Add Post</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <label>Title: </label><br />
                    <input type="text" name="title" onChange={e => setTitle(e.target.value)} value = {title}/>
                </div>
                <div>
                    <label>Body: </label><br />
                    <textarea name="body" onChange={e => setBody(e.target.value)} value={body}></textarea>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
		</div> 
	);
}
export default PostForm;