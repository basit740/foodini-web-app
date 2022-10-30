import React, { useState } from 'react';
import classes from '../../styles/landing/landing.module.css';

import locationIcon from '../../assets/landing/location.png';

import searchIcon from '../../assets/landing/search-icon.png';

import RestaurntInput from './RestaurntInput';

const Landing = () => {
	const [locationFocus, setLocationFocus] = useState(false);
	const [locationSearchComplete, setLocationSearchComplete] = useState(false);
	const [restaurantOn, setRestaurantOn] = useState(false);

	// reference to both inputs

	const locationFocusHandler = () => {
		setLocationFocus(true);
	};
	const locationBlurHandler = (e) => {
		if (e.target.value.length > 2) {
			setLocationSearchComplete(true);
		}
	};

	const addRestaurantHandler = (e) => {
		setRestaurantOn(true);
		setLocationSearchComplete(false);
	};
	return (
		<div className={classes.landing}>
			<div className='container'>
				<div className={classes.content}>
					<div className={classes.main_heading}>
						<h1>Discover the best restaurants for your dietary needs!</h1>
					</div>
					<div
						className={`${classes.search_box_container} ${
							restaurantOn ? classes.restaurant_on : ''
						}`}
					>
						<div
							className={`${classes.search_box}  ${
								locationFocus === true ? classes.location_focus : ''
							}`}
						>
							<div className={`${classes.location}`}>
								<div className={`${classes.location_icon}`}>
									<img src={locationIcon} alt='location icon' />{' '}
									<span>Location</span>
								</div>
								<input
									type='text'
									className={classes.txt_search}
									placeholder='Enter location to start exploring'
									onFocus={locationFocusHandler}
									onBlur={locationBlurHandler}
								/>
							</div>

							<RestaurntInput />
							<div className={classes.search_icon}>
								<img src={searchIcon} alt='search' />
							</div>
						</div>

						{locationSearchComplete && (
							<p
								className={classes.add_restaurant}
								onClick={addRestaurantHandler}
							>
								Add a Restaurant/Cuisine to you Search?
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
