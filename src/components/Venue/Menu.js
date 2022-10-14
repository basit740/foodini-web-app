import React from 'react';
import MenuCard from './MenuCard';
import classes from '../../styles/menu.module.css';
import banner from '../../assets/venue/banner.png';
import fullStar from '../../assets/venue/stars/fullStar.png';

// action icons

import phone from '../../assets/venue/actions/phone.png';
import directions from '../../assets/venue/actions/directions.png';
import website from '../../assets/venue/actions/website.png';
import order from '../../assets/venue/actions/order.png';
import RestaurantAction from './RestaurantAction';

import { NavLink } from 'react-router-dom';

const actions = [
	{ id: 1, actionImg: phone, actionText: 'Call' },
	{ id: 1, actionImg: directions, actionText: 'Directions' },
	{ id: 1, actionImg: website, actionText: 'Website' },
	{ id: 1, actionImg: order, actionText: 'Order' },
];
const Menu = () => {
	return (
		<div className={`${classes.menu_container} container-fluid`}>
			<div className={classes.info_bar}>
				<div className={`${classes.info_bar_content} container`}>
					<button className={classes.back_btn}> Back</button>
					<p>
						This restaurant has been reviewed by an Accredited Practicing
						Dietition (APD)
						<span> info</span>
					</p>
				</div>
			</div>
			<div className={classes.restaurant_banner}>
				<img src={banner} alt='restuarant banner' />
			</div>
			<div className={classes.restaurant_info}>
				<div className={`${classes.restaurant_info_content} container`}>
					<div className={classes.restaurant_info_text}>
						<h3>Pilgrim's Vegetarian Cafe</h3>
						<p className={classes.rating}>
							<div>
								<img src={fullStar} alt='' />
								<img src={fullStar} alt='' />
								<img src={fullStar} alt='' />
								<img src={fullStar} alt='' />
								<img src={fullStar} alt='' />
							</div>
							<div className={classes.rating_text}>
								<span>157</span>
								<span> Reviews</span>
							</div>
						</p>
						<p>Vegetarian</p>
					</div>

					<div className={classes.resaurant_info_actions}>
						{actions.map((act) => {
							return (
								<RestaurantAction
									actionImg={act.actionImg}
									actionText={act.actionText}
								/>
							);
						})}
					</div>
				</div>
			</div>

			<div className={classes.venue_nav_bar}>
				<div className={`${classes.venue_nav_bar_content} container`}>
					<ul className={classes.nav}>
						<li>
							<NavLink
								activeClassName={classes.active_link}
								className={({ isActive }) =>
									isActive ? `${classes.active_link}` : 'inactive'
								}
								to='/venue'
							>
								Menu
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={classes.active_link}
								className={({ isActive }) =>
									isActive ? `${classes.active_link}` : 'inactive'
								}
								to='/venue/more_info'
							>
								More Info
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={classes.active_link}
								className={({ isActive }) =>
									isActive ? `${classes.active_link}` : 'inactive'
								}
								to='/venue/reviews'
							>
								Reviews
							</NavLink>
						</li>
					</ul>
					<div className={classes.filters}>
						<select name='matches' id='matches'>
							<option value='allMatches'>All (Matches)</option>
						</select>
						<select name='menu' id='menu'>
							<option value='allMenu'>All (Menu)</option>
						</select>
					</div>
				</div>
			</div>

			<div className='container'>
				<div className={classes.matches}>
					<h4>Matches</h4>
					<p>Breakfast</p>
					<div className={classes.menu}>
						<MenuCard />
						<MenuCard />
						<MenuCard />
						<MenuCard />
					</div>
				</div>

				<div className={classes.with_changes}>
					<h4>Matches</h4>
					<p>Entrees</p>
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

				<div className={classes.not_suitable}>
					<h4>Matches</h4>
					<p>Entrees</p>
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
		</div>
	);
};

export default Menu;
