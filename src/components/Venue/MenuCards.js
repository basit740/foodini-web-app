import React from 'react';

const MenuCards = () => {
	return (
		<div>
			<div className={`${classes.matches} ml_5 mb_10`}>
				<h4>Matches</h4>
				<p className='ml_5 mb_10'>Breakfast</p>
				<div className={`${classes.menu} ml_5 mb_10`}>
					<MenuCard />
					<MenuCard />
					<MenuCard />
					<MenuCard />
				</div>
			</div>

			<div className={`${classes.with_changes} ml_5 mb_10`}>
				<h4>Matches</h4>
				<p className='ml_5 mb_10'>Entrees</p>
				<div className={`${classes.menu} ml_5 mb_10`}>
					<MenuCard />
					<MenuCard />
					<MenuCard />
					<MenuCard />
					<MenuCard />
					<MenuCard />
					<MenuCard />
					<MenuCard />
				</div>
			</div>

			<div className={`${classes.not_suitable} ml_5 mb_10`}>
				<h4>Matches</h4>
				<p className='ml_5 mb_10'>Entrees</p>
				<div className={classes.menu}>
					<MenuCard />
					<MenuCard />
					<MenuCard />
					<MenuCard />
					<MenuCard />
					<MenuCard />
					<MenuCard />
					<MenuCard />
				</div>
			</div>
		</div>
	);
};

export default MenuCards;
