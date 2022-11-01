import DietaryPref from './components/DietaryPref/DietaryPref';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Venue from './pages/Venue/Venue';
import Reviews from './components/Venue/Reviews';
// import MoreInfo from './components/Venue/MoreInfo';
import Menu from './components/Venue/Menu';
import Landing from './components/Landing/Landing';

import Auth from './pages/auth/Index';
// import Landing from './pages/landing/Index.js';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='' element={<Landing />} />
					<Route path='auth' element={<Auth />} />
					<Route path='dietary_preferences' element={<DietaryPref />} />
					<Route path='venue/:id' element={<Venue />}>
						<Route index element={<Menu />} />
						<Route path='reviews' element={<Reviews />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
