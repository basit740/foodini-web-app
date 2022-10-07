import React from 'react';
import styles from '../../styles/dietarypref.module.css';
const DietaryPref = () => {
	return (
		<div className={`container`}>
			<div className={`${styles['dietarypf-content']}`}>
				<div className={`${styles['dietarypf-heading']}`}>
					<h2>Diatary Preferences</h2>
					<p>
						Tell us your ditary preferences so we can show you the restaurants
						that best match your needs! Foodini automatically filters your
						restaurant matches based off your dietary requirements
					</p>
				</div>

				<div className={`${styles['diatarypf-box']}`}>
					<div className={`${styles['item']}`}>
						<div className={`${styles['item-heading']}`}>
							<div className={`${styles['item-heading-content']}`}>
								<div className='d-flex ali-center gap-32'>
									<p className={`${styles['item-number']}`}>
										<span>1</span>
									</p>
									<h4>Select Dietary Preferences</h4>
								</div>
								<p class={`${styles.brief} w-264`}>
									Brief description of how the Diatary filters work
								</p>
							</div>

							<ul className={styles['item-heading-tags']}>
								<li className={`${styles.tag} ${styles['tag-active']}`}>
									Vegetarian (VG)
								</li>
								<li className={`${styles.tag}`}>Vegan (V)</li>
								<li className={`${styles.tag}`}>Pescatrian (P)</li>
								<li className={`${styles.tag}`}>None</li>
							</ul>
						</div>

						<div className={`${styles['item-body']}`}>
							<h4>Select FODMAP Preferences</h4>
							<p>Brief description of how the FODMAP filters work</p>
							<p>
								Select <span>EXCLUDE</span> for all the food group you want to
								excluded from your diet
							</p>
							<p className={`${styles.fodmap}`}>FODMAP Diet</p>
						</div>
					</div>

					<div className={`${styles['item']}`}>{/* <p>1</p> */}</div>

					<div className={`${styles['item']}`} style={{ display: 'none' }}>
						<p>1</p>
						<p>Select Dietary Preferences</p>
						<p>Brief description of how the Diatary filters work</p>

						<ul>
							<li>Vegetarian (VG)</li>
							<li>Vegan (V)</li>
							<li>Pescatrian (P)</li>
							<li>None</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DietaryPref;
