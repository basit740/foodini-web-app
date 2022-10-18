import React from 'react';
import classes from '../../styles/menudetail.module.css';
import img from '../../assets/venue/menu1.png';

const MenuDetail = ({ menu, showDetail, onClose }) => {
	const closeHandler = () => {
		onClose();
	};
	return (
		<div className={`${classes.menu_detail} ${showDetail ? '' : classes.hide}`}>
			<div className={classes.menu_detail_content}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className={classes.close}
					onClick={closeHandler}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>

				<h2 className={classes.menu_type}>
					<span className={`${classes.not_suitable} ${classes.type_span}`}>
						Not Suitable
					</span>
				</h2>
				<div className={classes.menu_info}>
					<img src={img} alt='' />
					<div className={classes.text_content}>
						<h4>North Shore Plate</h4>
						<div className={classes.tags}>
							<div className={classes.tag}>Vegetarian</div>
							<div className={classes.tag}>Gluten-Free</div>
							<div className={classes.tag}>Nut-Free</div>
						</div>
						<div className={classes.price}>
							<span>Price</span>
							<p>$ 23.00</p>
						</div>
					</div>
				</div>
				<div className={classes.ingredients}>
					<h3>Ingredients</h3>
					<ul>
						<li>Mexican Black Bean Brew</li>
						<li>Brown Rice</li>
						<li>Sour Cream</li>
						<li>Guacamole</li>
						<li>Floure Tortilla</li>
						<li>Lettuce</li>
						<li>Tomato Salsa</li>
					</ul>
				</div>
				<div className={classes.action}>
					<button>Register</button>
				</div>
			</div>
		</div>
	);
};

export default MenuDetail;
