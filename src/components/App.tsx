import React from 'react';

import '../styles/index.scss';
import { Provider } from 'react-redux';
import store from '../store'
import Main from './Main';

const App:React.FC = () => {
	return (
		<>
			<Provider store={store}>
				<Main />
			</Provider>	
		</>
	);
}

export default App;