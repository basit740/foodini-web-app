import React, { useRef, useEffect, useState } from 'react';

import classes from '../../styles/landing/landing.module.css';
import styles from '../../styles/landing/restaurantInput/restaurantInput.module.css';
import cluteryIcon from '../../assets/landing/clutery.png';
const RestaurntInput = () => {
	const restaurantInput = useRef();

	// eslint-disable-next-line
	const [defaultList, setDefaultList] = useState([
		{ id: 1, title: 'Hamburgers' },
		{ id: 2, title: 'Pasta' },
		{ id: 3, title: 'Pizza' },
	]);

	const [list, setList] = useState([
		{ id: 1, title: 'Hamburgers' },
		{ id: 2, title: 'Pasta' },
		{ id: 3, title: 'Pizza' },
	]);
	const inputChangeHandler = (e) => {
		const filtered = defaultList.filter((item) =>
			item.title
				.toLocaleUpperCase()
				.includes(e.target.value.toLocaleUpperCase())
		);
		setList((prev) => {
			return [...filtered];
		});
	};
	useEffect(() => {
		restaurantInput.current.focus();
	});
	return (
		<div className={classes.restaurant_cuisine}>
			<div className={classes.restaurant_cuisine_icon}>
				<img src={cluteryIcon} alt='location icon' />{' '}
				<span> Resaurant / Cuisine</span>
			</div>

			<div className={styles.input_container}>
				<input
					type='text'
					className={classes.txt_restaurant_cuisine}
					ref={restaurantInput}
					onChange={inputChangeHandler}
				/>
				<ul className={styles.drop_down}>
					<li>Popular Searches</li>
					{list.map((item) => {
						return (
							<li id={item.id} key={item.id}>
								{item.title}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default RestaurntInput;
