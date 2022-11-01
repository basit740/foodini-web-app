import React, { useState } from 'react';
import styles from '../../styles/dietarypref.module.css';

import Alg from './Alg';
import CustomCbx from '../utils/CustomCbx';
import Tag from '../utils/Tag/Tag';
import Review from './Review';

import { algsData } from '../../data/alg';
import { dietPrefs } from '../../data/dietPrefs';
import { foodGroups } from '../../data/foodGroups';

import { useNavigate } from 'react-router-dom';
import SavePrefPrompt from './SavePrefPrompt';

const DietaryPref = () => {
	const [step, setStep] = useState(1);
	const [algs, setAlgs] = useState(algsData);
	const [dtpf, setDtpf] = useState(dietPrefs);
	const [fdGroups, setFdGroups] = useState(foodGroups);
	const [showPrompt, setShowPrompt] = useState(false);

	const navigate = useNavigate();

	// Prompt Handlers

	const agreeHandler = (e) => {
		setShowPrompt(false);
		navigate('/auth');
	};
	const disagreeHandler = (e) => {};

	const dtpfTagClickHandler = (info) => {
		const prevDtpf = [...dtpf];

		let none = false;
		if (info.title === 'None' && info.selected === true) {
			none = true;
		}

		if (none) {
			prevDtpf.map((alg) => {
				if (alg.title === 'None') {
					alg.selected = true;
				} else {
					alg.selected = false;
				}
				return alg;
			});
		} else {
			prevDtpf.map((alg) => {
				if (info.id === alg.id) {
					alg.selected = info.selected;
				}
				if (alg.title === 'None') {
					alg.selected = false;
				}

				return alg;
			});
		}

		setDtpf((prev) => {
			return [...prevDtpf];
		});
	};

	const algsTagClickHandler = (info) => {
		const prevAlgs = [...algs];

		let none = false;
		if (info.title === 'None' && info.selected === true) {
			none = true;
		}

		if (none) {
			prevAlgs.map((alg) => {
				if (alg.title === 'None') {
					alg.selected = true;
				} else {
					alg.selected = false;
				}
				return alg;
			});
		} else {
			prevAlgs.map((alg) => {
				if (info.id === alg.id) {
					alg.selected = info.selected;
				}
				if (alg.title === 'None') {
					alg.selected = false;
				}

				return alg;
			});
		}

		setAlgs((prev) => {
			return [...prevAlgs];
		});
	};
	// Food Group Handlers

	const foodGroupSwitcher = (info) => {
		const prevFoodGroups = [...fdGroups];
		prevFoodGroups.map((item) => {
			if (item.id === info.id) {
				item.excluded = info.excluded;
			}
			return item;
		});

		setFdGroups((prev) => {
			return [...prevFoodGroups];
		});
	};

	const nextStepHandler = (e) => {
		if (step === 2) {
			submitHandler();
			return;
		}

		setStep(2);
	};
	const prevStepHandler = (e) => {
		setStep(1);
	};
	const submitHandler = () => {
		// showing prompt

		document.body.style.overflowY = 'hidden';
		setShowPrompt(true);
		return;

		//eslint-disable-next-line
		localStorage.setItem('dtpf', 'done');
		navigate('/venue/23423');
	};

	return (
		<>
			{showPrompt && (
				<SavePrefPrompt
					onAgree={agreeHandler}
					onDisagree={disagreeHandler}
					onClose={(e) => {
						setShowPrompt(false);
					}}
				/>
			)}
			<div className={`container`}>
				<div className={`${styles['dietarypf-content']}`}>
					<div className={`${styles['dietarypf-heading']}`}>
						<h2>Diatary Preferences</h2>
						{step === 1 && (
							<p className={styles.conditional_paragraph}>
								Tell us your ditary preferences so we can show you the
								restaurants that best match your needs! Foodini automatically
								filters your restaurant matches based off your dietary
								requirements
							</p>
						)}
					</div>

					<div className={`${styles['diatarypf-box']}`}>
						{step === 2 && (
							<button className={styles.back_btn} onClick={prevStepHandler}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									className={styles.icon_backward}
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M15.75 19.5L8.25 12l7.5-7.5'
									/>
								</svg>
								<span>Back</span>
							</button>
						)}

						{step === 1 && (
							<>
								<div className={`${styles['item']}`}>
									<div className={`${styles['item-heading']}`}>
										<div className={`${styles['item-heading-content']}`}>
											<div className='d-flex ali-center gap-32'>
												<p className='number'>
													<span>1</span>
												</p>
												<h3>Select Dietary Preferences</h3>
											</div>
											<p class={`${styles.brief} w-264`}>
												Brief description of how the Diatary filters work
											</p>
										</div>

										<ul className={styles['item-heading-tags']}>
											{dtpf.map((dtp) => {
												return <Tag data={dtp} onClick={dtpfTagClickHandler} />;
											})}
										</ul>
									</div>

									<div className={`${styles['item-body']}`}>
										<div className={`${styles['first-row']} d-flex`}>
											<div className={`${styles['item-body-heading']}`}>
												<h4>Select FODMAP Preferences</h4>
												<p className={`${styles.body_brief} w-264`}>
													Brief description of how the FODMAP filters work
												</p>
											</div>

											<div className={`${styles['fodmap-grid']}`}>
												<div className={`${styles['fodmap']} ${styles.real}`}>
													<div className={`${styles['check-icon-container']}`}>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															fill='none'
															viewBox='0 0 24 24'
															stroke-width='1.5'
															stroke='currentColor'
															className={`${styles['check-icon']}`}
														>
															<path
																stroke-linecap='round'
																stroke-linejoin='round'
																d='M4.5 12.75l6 6 9-13.5'
																stroke-width='2'
															/>
														</svg>
													</div>
													<p className={styles.fodmap_title}>FODMAP Diet</p>
												</div>

												{/* The code with no real EFFECT */}
												<div className={`${styles.fodmap} ${styles['d-none']}`}>
													<div className={`${styles['check-icon-container']}`}>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															fill='none'
															viewBox='0 0 24 24'
															stroke-width='1.5'
															stroke='currentColor'
															className={`${styles['check-icon']}`}
														>
															<path
																stroke-linecap='round'
																stroke-linejoin='round'
																d='M4.5 12.75l6 6 9-13.5'
																stroke-width='2'
															/>
														</svg>
													</div>
													<p>FODMAP Diet</p>
												</div>
												<div className={`${styles.fodmap} ${styles['d-none']}`}>
													<div className={`${styles['check-icon-container']}`}>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															fill='none'
															viewBox='0 0 24 24'
															stroke-width='1.5'
															stroke='currentColor'
															className={`${styles['check-icon']}`}
														>
															<path
																stroke-linecap='round'
																stroke-linejoin='round'
																d='M4.5 12.75l6 6 9-13.5'
																stroke-width='2'
															/>
														</svg>
													</div>
													<p>FODMAP Diet</p>
												</div>
												<div className={`${styles.fodmap} ${styles['d-none']}`}>
													<div className={`${styles['check-icon-container']}`}>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															fill='none'
															viewBox='0 0 24 24'
															stroke-width='1.5'
															stroke='currentColor'
															className={`${styles['check-icon']}`}
														>
															<path
																stroke-linecap='round'
																stroke-linejoin='round'
																d='M4.5 12.75l6 6 9-13.5'
																stroke-width='2'
															/>
														</svg>
													</div>
													<p>FODMAP Diet</p>
												</div>
												{/* End of the code with no real EFFECT */}
											</div>
										</div>

										{/* second row */}
										<div
											className={`${styles['fodmap-second-row']} d-flex j-sb`}
										>
											<div className={`${styles.infotext} w-350`}>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth={1.5}
													stroke='currentColor'
													className={`${styles['info-icon']}`}
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
													/>
												</svg>
												<p>
													Select "<span>EXCLUDE</span>" for all the food group
													you want to excluded from your diet
												</p>
											</div>

											<div className={`${styles['fodmap-items-grid']}`}>
												<div className={`${styles['fodmap-items-one']}`}>
													{fdGroups.map((fdg, index) => {
														if (index < 3) {
															return (
																<CustomCbx
																	title={fdg.title}
																	id={fdg.id}
																	excluded={fdg.excluded}
																	onSwitch={foodGroupSwitcher}
																/>
															);
														} else {
															return null;
														}
													})}
												</div>

												<div className={`${styles['fodmap-items-two']}`}>
													{fdGroups.map((fdg, index) => {
														if (index > 2) {
															return (
																<CustomCbx
																	title={fdg.title}
																	id={fdg.id}
																	excluded={fdg.excluded}
																	onSwitch={foodGroupSwitcher}
																/>
															);
														} else {
															return null;
														}
													})}
												</div>
											</div>
										</div>
									</div>
								</div>

								<Alg algs={algs} onClick={algsTagClickHandler} />
							</>
						)}
						{/* Area for Next button */}

						{step === 2 && (
							<Review algs={algs} fdGroups={fdGroups} dtpf={dtpf} />
						)}
						<div className={styles.next_button_container}>
							<button onClick={nextStepHandler} className={styles.next_btn}>
								<span>{step === 1 ? 'Next' : 'Save'}</span>
								{step === 1 && (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke-width='1.5'
										stroke='currentColor'
										className={styles.icon_forward}
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											d='M8.25 4.5l7.5 7.5-7.5 7.5'
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DietaryPref;
