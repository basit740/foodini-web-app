import React from 'react';
import classes from '../../styles/auth/auth.module.css';
import GoogleLoginIcon from './GoogleLoginIcon';
import FacebookLoginIcon from './FacebookLoginIcon';
const SocialLoginIcons = () => {
	return (
		<div className={classes.social_logins}>
			<a href='/google_login'>
				<GoogleLoginIcon />
			</a>

			<a href='/facebook_login'>
				<FacebookLoginIcon />
			</a>
		</div>
	);
};

export default SocialLoginIcons;
