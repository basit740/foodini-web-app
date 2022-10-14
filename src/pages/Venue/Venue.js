import React, { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

const Venue = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem('dtpf') === null) {
			navigate('/dietary_preferences');
		}
	});
	return (
		<div>
			<h1>This is venue</h1>
			<Outlet />
		</div>
	);
};

export default Venue;
