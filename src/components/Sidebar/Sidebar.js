import React from 'react';
import classes from '../../styles/sidebar.module.css';
import userPlaceholder from '../../assets/sidebar/userPlaceholder.png';
import logoSm from '../../assets/logo-sm.png';
import logoFilled from '../../assets/logo-filled.png';
import info from '../../assets/sidebar/info.png';
import explore from '../../assets/sidebar/explore.png';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { close } from '../../store/reducers/sidebarSlice';

const Sidebar = () => {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const disable = (e) => {
		e.stopPropagation();
	};
	return (
		<div className={classes.sidebar} onClick={() => dispatch(close())}>
			<div className={classes.sidbar_content} onClick={disable}>
				<div className={classes.user_section}>
					{auth.user === null && (
						<div className={classes.user}>
							<img src={userPlaceholder} alt='user card' />
							<div className={classes.name_and_view_account}>
								<h3>Alex</h3>
								<Link to='/user_profile'>View Account</Link>
							</div>
						</div>
					)}
					{auth.user !== null && (
						<div className={classes.register_signin}>
							<button className={classes.btn_register}>Register</button>
							<button className={classes.btn_signin}>Sign In</button>
						</div>
					)}
					<ul className={classes.actions}>
						{auth.user === null && (
							<li>
								<Link>
									{' '}
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='15.48'
										height='15.5'
										viewBox='42.75 147.75 15.48 15.5'
									>
										<path
											d='M45.48 164h3m3 0h-3m0 0v-5m8 5v-8s2.5-1 2.5-3v-4.5m-2.5 4v-4m-12.5 6.5c1 2.128 4.5 4 4.5 4s3.5-1.872 4.5-4c1.08-2.297 0-6.5 0-6.5h-9s-1.08 4.203 0 6.5Z'
											stroke-linejoin='round'
											stroke-linecap='round'
											stroke-width='1.5'
											stroke='#000'
											fill='transparent'
											data-name='clutery (1)'
										/>
									</svg>
									<p>Eating Preferences</p>
								</Link>
							</li>
						)}
						<li>
							<Link>
								<img src={explore} alt='explore more' />
								Explore
							</Link>
						</li>
						<li>
							<Link>
								{' '}
								<img src={info} alt='more info' />
								About
							</Link>
						</li>

						{auth.user === null && (
							<li className={classes.signout}>
								<Link to='/signout'>Sign Out</Link>
							</li>
						)}
					</ul>
				</div>
				<div className={classes.brand_section}>
					<div className={classes.brand_logo_text}>
						<Link to='/'>
							<img src={logoSm} alt='foodini brand' />
						</Link>
						<Link to='website.com'>Visit our website</Link>
						<Link to='/add_your_restaurant'>Add your restaurant</Link>
					</div>
					<div className={classes.brand_mobile_apps}>
						<div className={classes.heading}>
							<div className={classes.row}>
								<img src={logoFilled} alt='foodini brand' />
								<p>Get the most of Foodini using our app</p>
							</div>
							<div className={classes.row}>
								<a href='https://www.apple.com' className={classes.iphone}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='10.25'
										height='12'
										viewBox='57.875 709 10.25 12'
									>
										<g data-name='apple'>
											<g data-name='Group 2476'>
												<g data-name='Group 2475'>
													<path
														d='M65.25 709c-.64.044-1.388.454-1.824.987-.397.484-.724 1.202-.597 1.9.7.022 1.421-.397 1.84-.94.391-.504.688-1.218.58-1.947Z'
														fill='#465062'
														fill-rule='evenodd'
														data-name='Path 7105'
													/>
												</g>
											</g>
											<g data-name='Group 2478'>
												<g data-name='Group 2477'>
													<path
														d='M67.778 713.026c-.615-.77-1.478-1.217-2.293-1.217-1.076 0-1.532.515-2.28.515-.77 0-1.356-.514-2.287-.514-.914 0-1.887.559-2.505 1.514-.867 1.346-.719 3.876.687 6.03.504.771 1.176 1.638 2.055 1.646.782.007 1.002-.502 2.062-.507 1.06-.006 1.26.514 2.041.505.88-.006 1.589-.967 2.092-1.738.361-.553.495-.831.775-1.455-2.035-.775-2.361-3.668-.347-4.779Z'
														fill='#465062'
														fill-rule='evenodd'
														data-name='Path 7106'
													/>
												</g>
											</g>
										</g>
									</svg>
									iPhone
								</a>
								<a href='https://www.google.com' className={classes.android}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='10.856'
										height='13'
										viewBox='83.072 708 10.856 13'
									>
										<g data-name='XMLID_197_'>
											<path
												d='M89.857 721c.435 0 .814-.38.814-.814v-1.9h.543c.326 0 .543-.218.543-.543v-5.428h-6.514v5.428c0 .326.217.543.543.543h.543v1.9c0 .435.38.814.814.814.435 0 .814-.38.814-.814v-1.9h1.086v1.9c0 .435.38.814.814.814Z'
												fill='#465062'
												fill-rule='evenodd'
												data-name='XMLID_221_'
											/>
											<path
												d='M93.114 717.743a.833.833 0 0 0 .814-.814v-3.8a.835.835 0 0 0-.814-.814.835.835 0 0 0-.813.813v3.8c0 .436.379.815.813.815Z'
												fill='#465062'
												fill-rule='evenodd'
												data-name='XMLID_222_'
											/>
											<path
												d='M83.886 717.743a.833.833 0 0 0 .813-.814v-3.8a.835.835 0 0 0-.813-.814.835.835 0 0 0-.814.813v3.8c0 .436.379.815.814.815Z'
												fill='#465062'
												fill-rule='evenodd'
												data-name='XMLID_223_'
											/>
											<path
												d='M91.105 708.082a.26.26 0 0 0-.379 0l-.728.726-.034.034a3.218 3.218 0 0 0-1.456-.326h-.016c-.54.001-1.024.11-1.456.326l-.034-.034-.728-.726a.26.26 0 0 0-.38 0 .26.26 0 0 0 0 .379l.706.705a2.937 2.937 0 0 0-.613.55 3.19 3.19 0 0 0-.74 1.886l-.001.022a3.126 3.126 0 0 0-.003.147h6.514c0-.05 0-.098-.003-.147l-.002-.022a3.19 3.19 0 0 0-.74-1.887 2.935 2.935 0 0 0-.612-.55l.705-.704a.26.26 0 0 0 0-.379Zm-3.963 2.74a.407.407 0 1 1 0-.814.407.407 0 0 1 0 .814Zm2.716 0a.407.407 0 1 1 0-.814.407.407 0 0 1 0 .814Z'
												fill='#465062'
												fill-rule='evenodd'
												data-name='XMLID_224_'
											/>
										</g>
									</svg>
									Android
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
