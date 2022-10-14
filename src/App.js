import DietaryPref from './components/DietaryPref/DietaryPref';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Venue from './pages/Venue/Venue';
import Reviews from './components/Venue/Reviews';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='dietary_preferences' element={<DietaryPref />} />
					<Route path='venue' element={<Venue />}>
						<Route path='reviews' element={<Reviews />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
