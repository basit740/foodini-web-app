import React, { useState } from 'react';

import classes from '../../styles/auth/auth.module.css';

import SocialLoginIcons from './SocialLoginIcons';

import SignUp from './SignUp';
import SignIn from './SignIn';
import OrBar from './OrBar';
import ForgotPassword from './ForgotPassword';

// import { Route } from 'react-router-dom';

const Index = () => {
	// sing in
	const [showSingUp, setShowSignUp] = useState(true);
	const [showForgotPassword, setShowForgotPassword] = useState(false);

	const onSignInShowHandler = (e) => {
		setShowForgotPassword(false);
	};
	return (
		<div className={`${classes.auth}`}>
			<div className={classes.text_area}>
				<div className={classes.text_area_content}>
					{!showForgotPassword && (
						<>
							<h3 className={classes.heading}>Register via social media</h3>
							<SocialLoginIcons />
							<OrBar />
							{showSingUp && <SignUp onHide={() => setShowSignUp(false)} />}
							{!showSingUp && (
								<SignIn
									onHide={() => setShowSignUp(true)}
									onForgotPassword={() => setShowForgotPassword(true)}
								/>
							)}
						</>
					)}
					{showForgotPassword && (
						<ForgotPassword onSignInShow={onSignInShowHandler} />
					)}
				</div>
			</div>

			<div className={classes.banner_area}></div>
		</div>
	);
};

export default Index;
