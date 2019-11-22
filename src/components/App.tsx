import React from 'react';

import '../styles/index.css';
import Post from './Post';
import PostForm from './Postform';
import { Provider } from 'react-redux';
import store from '../store'

const App:React.FC = () => {
	return (
		<>
			<Provider store={store}>
				<PostForm />
				<Post />
			</Provider>	
		</>
	);
}

export default App;