import React from 'react';

import classes from '../../styles/auth/auth.module.css';
import InputBox from './InputBox';
import PasswordBox from './PasswordBox';
const SignIn = ({ onForgotPassword, onHide }) => {
	const forgotPasswordHandler = (e) => {
		onForgotPassword();
	};
	const showSignUpHandler = (e) => {
		e.preventDefault();
		onHide();
	};
	return (
		<div className={classes.form_section}>
			<InputBox
				label='Email: '
				type='email'
				id='email'
				boxClassName={classes.input_group}
				inputClassName={classes.email}
			/>
			<div className={classes.input_group}>
				<label htmlFor='password'>Create Password:</label>
				<PasswordBox />
			</div>

			<p
				className={classes.forgot_password_help}
				onClick={forgotPasswordHandler}
			>
				Forgot password?
			</p>
			<div className={classes.actions}>
				<button className={`${classes.btn_register} ${classes.disabled}`}>
					Register
				</button>
				<p className={classes.helping_text}>
					Don't have an account?
					<a href='/sign_ing' onClick={showSignUpHandler}>
						{' '}
						Register
					</a>
				</p>
				<p className={classes.terms_of_use}>
					<span>Terms of User</span>
				</p>
			</div>
		</div>
	);
};

export default SignIn;
