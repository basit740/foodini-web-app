import React, { useState, useEffect } from 'react';

import classes from '../../styles/auth/auth.module.css';
import InputBox from './InputBox';
import PasswordBox from './PasswordBox';
const SignUp = ({ onHide }) => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	// singin handler
	const showSignInHandler = (e) => {
		e.preventDefault();
		onHide();
	};
	useEffect(() => {
		// for eslint error
		console.log(password);
		console.log(confirmPassword);
	}, [password, confirmPassword]);
	return (
		<div className={classes.form_section}>
			<InputBox
				label='Full name: '
				type='text'
				id='fullName'
				boxClassName={classes.input_group}
				inputClassName={classes.full_name}
			/>
			<InputBox
				label='Email: '
				type='email'
				id='email'
				boxClassName={classes.input_group}
				inputClassName={classes.email}
			/>
			<div className={classes.input_group}>
				<label htmlFor='password'>Create Password:</label>
				<PasswordBox onChange={(e) => setPassword(e.target.value)} />
			</div>
			<div className={classes.input_group}>
				<label htmlFor='confirmPassword'>Re-type Password:</label>
				<PasswordBox onChange={(e) => setConfirmPassword(e.target.value)} />
			</div>

			<div className={classes.actions}>
				<button className={`${classes.btn_register} ${classes.disabled}`}>
					Register
				</button>
				<p className={classes.helping_text}>
					Have an account already?
					<a href='/sign_ing' onClick={showSignInHandler}>
						{' '}
						Sign In
					</a>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
