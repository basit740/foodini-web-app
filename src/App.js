import DietaryPref from './components/DietaryPref/DietaryPref';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Venue from './pages/Venue/Venue';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='venue' element={<Venue />} />
					<Route path='dietary_preferences' element={<DietaryPref />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
