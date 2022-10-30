import React, { useState } from 'react';
import classes from '../../styles/landing/landing.module.css';

// import locationIcon from '../../assets/landing/location.png';

import searchIcon from '../../assets/landing/search-icon.png';

import RestaurntInput from './RestaurntInput';
import LocationInput from './LocationInput';
import GetMobileApps from './GetMobileApps';

const Landing = () => {
	const [locationFocus, setLocationFocus] = useState(false);
	const [locationSearchComplete, setLocationSearchComplete] = useState(false);
	const [restaurantOn, setRestaurantOn] = useState(false);

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
							<LocationInput
								onFocus={locationFocusHandler}
								onBlur={locationBlurHandler}
							/>

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

					<p className={classes.sign_in_guide}>Sign in for saved food prefer</p>
					<GetMobileApps />
				</div>
			</div>
		</div>
	);
};

export default Landing;
