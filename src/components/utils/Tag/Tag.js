import React, { useState } from 'react';
import classes from '../../../styles/tag.module.css';
const Tag = (props) => {
	const { id, title, value } = props.data;

	const [active, setActive] = useState(false);
	let firstPart = '';
	let secondPart = '';
	if (title.length > 15) {
		if (title.indexOf('(') !== -1) {
			firstPart = title.split('(')[0];
			firstPart += '(';
			secondPart = title.split('(')[1];
		} else if (title.indexOf('/') !== -1) {
			firstPart = title.split('/')[0];
			firstPart += '/';
			secondPart = title.split('/')[1];
		}
	} else {
		firstPart = title;
	}

	const activeHandler = () => {
		if (active) {
			setActive(false);
			props.onSelect({
				active: false,
				value,
			});
		} else {
			setActive(true);
			props.onSelect({
				active: true,
				value,
			});
		}
	};
	return (
		<div
			id={id}
			className={`${classes.tag} ${active ? classes.active : ''} ${
				title.length > 15 ? classes.large : ''
			}`}
			onClick={activeHandler}
			value={value}
		>
			{/* {title} */}
			<p>{firstPart}</p>
			<p>{secondPart}</p>
		</div>
	);
};

export default Tag;
