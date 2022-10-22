import React from 'react';
import Navbar from '../Navar/Navbar';
import { Outlet } from 'react-router-dom';
import classes from '../../styles/layout.module.css';
import Sidebar from '../Sidebar/Sidebar';

import { useSelector } from 'react-redux';
const Layout = () => {
	const sidebar = useSelector((state) => state.sidebar);
	return (
		<div className={classes.layout}>
			<Navbar />
			{sidebar.open && <Sidebar />}
			<Outlet />
		</div>
	);
};

export default Layout;
