import React from 'react';

import classes from '../../styles/auth/auth.module.css';
import InputBox from './InputBox';
const ForgotPassword = ({ onSignInShow }) => {
	return (
		<div className={classes.forgot_password}>
			<h2 className={classes.forgot_password_heading}>Resest your password</h2>
			<div className={classes.forgot_password_content}>
				<p className={classes.password_reset_link}>
					We'll send you password reset link
				</p>
				<InputBox
					type='email'
					label='Email: '
					id='forgotPasswordEmail'
					boxClassName={classes.input_group}
				/>
				<div className={classes.actions}>
					<button className={`${classes.btn_register} ${classes.disabled}`}>
						Register
					</button>
					<p className={classes.helping_text}>
						Remember your password?
						<a
							href='/sign_ing'
							onClick={(e) => {
								e.preventDefault();
								onSignInShow();
							}}
						>
							{' '}
							Sign In
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
