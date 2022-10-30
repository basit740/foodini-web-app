import React from 'react';
import classes from '../../styles/landing/landing.module.css';
import locationIcon from '../../assets/landing/location.png';
const LocationInput = ({ onFocus, onBlur }) => {
	return (
		<div className={`${classes.location}`}>
			<div className={`${classes.location_icon}`}>
				<img src={locationIcon} alt='location icon' /> <span>Location</span>
			</div>
			<input
				type='text'
				className={classes.txt_search}
				placeholder='Enter location to start exploring'
				onFocus={onFocus}
				onBlur={onBlur}
			/>
		</div>
	);
};

export default LocationInput;
