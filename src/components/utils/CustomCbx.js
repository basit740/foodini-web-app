import React, { useState } from 'react';
import styles from '../../styles/customcbx.module.css';
const CustomCbx = ({ title, id, onSwitch }) => {
	const [active, setActive] = useState(false);

	const switchHandler = () => {
		setActive(!active);

		if (active) {
			onSwitch(false);
		} else {
			onSwitch(true);
		}
	};
	return (
		<div className={styles.customcbx}>
			<label
				htmlFor={id}
				className={`${styles.mainlabel}`}
				style={{ color: `${active ? '#000' : ''}` }}
			>
				{title}
			</label>

			<div className={styles.custombtn} onClick={switchHandler}>
				<label
					htmlFor=''
					className={`${styles['custombtn-label']} ${styles['custombtn-label--left']}`}
				>
					Include
				</label>

				<div
					className={`${styles['custombtn-content']} ${
						active ? `${styles.active}` : ``
					}`}
				>
					<div className={`${styles.switch}`}></div>
				</div>

				<label
					htmlFor=''
					style={{ color: `${active ? '#26d07c' : ''}` }}
					className={`${styles['custombtn-label']} ${styles['custombtn-label--left']}`}
				>
					Exclude
				</label>
			</div>

			{/* <input
				type='checkbox'
				id={id}
				name={id}
				className={styles.checkbox}
				style={{ display: 'none' }}
			/> */}
		</div>
	);
};

export default CustomCbx;
