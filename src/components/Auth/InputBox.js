import React from 'react';
// import classes from '../../styles/auth/auth.module.css';
const InputBox = ({ label, type, id, boxClassName, inputClassName }) => {
	return (
		<div className={boxClassName}>
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} className={inputClassName} />
		</div>
	);
};

export default InputBox;
