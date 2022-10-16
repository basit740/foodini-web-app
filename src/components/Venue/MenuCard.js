import React from 'react';
import classes from '../../styles/menucard.module.css';
import menu1 from '../../assets/venue/menu1.png';
const MenuCard = () => {
	return (
		<div className={classes.menu_card}>
			<img className={classes.menu_img} src={menu1} alt='' />
			<div className={classes.menu_info}>
				<div className={classes.heading}>
					<h6>North Share Plate</h6>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className={classes.icon_green_tick}
					>
						<path
							fill-rule='evenodd'
							d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
							clip-rule='evenodd'
						/>
					</svg>
				</div>
				<p className={classes.description}>
					Mexican black bean brew on a bed of brown rice, combined with sides...
				</p>
				<p className={classes.price}>$23.00</p>
			</div>
		</div>
	);
};

export default MenuCard;
