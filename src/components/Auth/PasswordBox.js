import React, { useState } from 'react';
import eye from '../../assets/auth/eye.png';
import classes from '../../styles/auth/auth.module.css';
const PasswordBox = ({ onChange }) => {
	const [open, setOpen] = useState(false);
	return (
		<div className={classes.password_box}>
			<input
				type={open ? 'text' : 'password'}
				id='confirmPassword'
				className={classes.confirm_password}
				onChange={onChange}
			/>
			<div
				className={`${classes.eye_container} ${open ? classes.open : ''}`}
				onClick={(e) => setOpen(!open)}
			>
				<div className={classes.eye_content}>
					<img
						src={eye}
						alt='hide show password'
						className={`${classes.eye} ${classes.open}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default PasswordBox;
