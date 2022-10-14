import React from 'react';
import classes from '../../../styles/tag.module.css';
const Tag = (props) => {
	const { id, title, value, selected } = props.data;

	// const [active, setActive] = useState(selected);
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
		if (selected) {
			// setActive(false);
			props.onClick({
				selected: false,
				id,
				title,
			});
		} else {
			// setActive(true);
			props.onClick({
				selected: true,
				id,
				title,
			});
		}
	};
	return (
		<div
			id={id}
			className={`${classes.tag} ${selected ? classes.active : ''} ${
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
