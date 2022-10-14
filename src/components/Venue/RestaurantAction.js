import React from 'react';

const RestaurantAction = ({ actionImg, actionText }) => {
	return (
		<div style={{ textAlign: 'center' }}>
			<img src={actionImg} alt={actionText} />
			<p>{actionText}</p>
		</div>
	);
};

export default RestaurantAction;
