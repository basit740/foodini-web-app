import React from 'react';
import classes from '../../styles/navbar.module.css';
const Hamburger = () => {
	return (
		<>
			<div className={`${classes.hamburger}`}>
				<div className={`${classes.bar}`}></div>
				<div className={`${classes.bar}`}></div>
				<div className={`${classes.bar}`}></div>
			</div>
		</>
	);
};

export default Hamburger;
