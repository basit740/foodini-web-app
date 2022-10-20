import React from 'react';
import Navbar from '../Navar/Navbar';
import { Outlet } from 'react-router-dom';
import classes from '../../styles/layout.module.css';
const Layout = () => {
	return (
		<div className={classes.layout}>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default Layout;
