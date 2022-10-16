import React from 'react';
import classes from '../../styles/restaurantaction.module.css';
const RestaurantAction = ({ actionImg, actionText }) => {
	return (
		<div className={classes.restaurant_action}>
			<img src={actionImg} alt={actionText} />
			<p>{actionText}</p>
		</div>
	);
};

export default RestaurantAction;
