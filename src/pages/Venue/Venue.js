import React, { useEffect } from 'react';

import { Outlet, useNavigate, useParams } from 'react-router-dom';

const Venue = () => {
	const navigate = useNavigate();
	const { id } = useParams();

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
