import React from 'react';

import '../styles/index.css';
import { Provider } from 'react-redux';
import store from '../store'

const App:React.FC = () => {
	return (
		<>
			<Provider store={store}>
			</Provider>	
		</>
	);
}

export default App;