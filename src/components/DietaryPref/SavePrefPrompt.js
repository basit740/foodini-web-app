import React from 'react';
import classes from '../../styles/savePrefPrompt.module.css';
const SavePrefPrompt = ({ onAgree, onDisagree, onClose, onStopClose }) => {
	const closeHandler = (e) => {
		onClose();
	};
	const stopHandler = (e) => {
		e.stopPropagation();
	};
	return (
		<div className={classes.save_pref_prompt} onClick={closeHandler}>
			<div className={classes.content} onClick={stopHandler}>
				<h3 className={classes.heading}>Save your dietary preferences</h3>
				<p className={classes.description}>
					Before you see all the amazing restaurants that match your dietary
					requirements, would you like to Register with Foodini and save your
					preferences for next time?
				</p>
				<p className={classes.helping_text}>
					The purpose of Foodini's Site and Mobile app is to provide a guide to
					allergy-friendly restaurants and businesses. All Content on our Site
					relating to the items, ingredients, allergens and preparation of food
					items is provided ssolely by the relevant business that provides the
					food items. Foodini does not gaurantee the accuracy or completeness of
					such information.
				</p>
				<p className={classes.helping_text_2}>
					By clicking Yes, you confirm that agree to these terms.
				</p>
				<div className={classes.actions}>
					<button onClick={onAgree} className={classes.btn_agree}>
						Yes, Register and Save
					</button>
					<button onClick={onDisagree} className={classes.btn_disagree}>
						Maybe Later
					</button>
				</div>
			</div>
		</div>
	);
};

export default SavePrefPrompt;
