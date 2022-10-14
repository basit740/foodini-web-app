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
			<Outlet />
		</div>
	);
};

export default Venue;
