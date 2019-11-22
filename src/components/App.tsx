import React from 'react';

<<<<<<< HEAD
import '../styles/index.scss';
=======
import '../styles/index.css';
import Post from './Post';
import PostForm from './Postform';
>>>>>>> 43cb882dda0c0b6e2e78abf54860439f8d9b53e7
import { Provider } from 'react-redux';
import store from '../store'
import Main from './Main';

const App:React.FC = () => {
	return (
		<>
			<Provider store={store}>
<<<<<<< HEAD
				<Main />
=======
				<PostForm />
				<Post />
>>>>>>> 43cb882dda0c0b6e2e78abf54860439f8d9b53e7
			</Provider>	
		</>
	);
}

export default App;