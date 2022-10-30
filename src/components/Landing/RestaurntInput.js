import React, { useRef, useEffect } from 'react';

import classes from '../../styles/landing/landing.module.css';
import cluteryIcon from '../../assets/landing/clutery.png';
const RestaurntInput = () => {
	const restaurantInput = useRef();
	useEffect(() => {
		restaurantInput.current.focus();
	});
	return (
		<div className={classes.restaurant_cuisine}>
			<div className={classes.restaurant_cuisine_icon}>
				<img src={cluteryIcon} alt='location icon' />{' '}
				<span> Resaurant / Cuisine</span>
			</div>
			<input
				type='text'
				className={classes.txt_restaurant_cuisine}
				ref={restaurantInput}
			/>
		</div>
	);
};

export default RestaurntInput;
