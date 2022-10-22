import React from 'react';
import classes from '../../styles/navbar.module.css';
const Hamburger = ({ onClick }) => {
	return (
		<div onClick={onClick}>
			<div className={`${classes.hamburger}`}>
				<div className={`${classes.bar}`}></div>
				<div className={`${classes.bar}`}></div>
				<div className={`${classes.bar}`}></div>
			</div>
		</div>
	);
};

export default Hamburger;
