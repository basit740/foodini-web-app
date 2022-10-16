import React, { useState, useRef, useEffect } from 'react';
import classes from '../../styles/alg.module.css';
// import { algsData } from '../../data/alg';
import Tag from '../utils/Tag/Tag';

const Alg = ({ algs, onClick }) => {
	const [localAlgs, setLocalAlgs] = useState(algs);

	const inputRef = useRef();
	const algFilter = (e) => {
		if (e.target.value === '') {
			setLocalAlgs((prev) => {
				return [...algs];
			});
		}
		const filtered = localAlgs.filter((alg) => {
			if (alg.title.toUpperCase().includes(e.target.value.toUpperCase())) {
				return alg;
			}
			return null;
		});
		setLocalAlgs((prev) => {
			return [...filtered];
		});
	};

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<div className={`${classes.alg}`}>
			<div className={classes.alg_heading}>
				<div className='d-flex ali-center gap-32'>
					<p className='number'>2</p>
					<h3>Select Allergies</h3>
				</div>
				<p className='w-264'>
					Brief description of how the Allergies filters work
				</p>
			</div>
			<div className={classes.alg_body}>
				<div className={classes.search_box}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
						/>
					</svg>

					<input
						ref={inputRef}
						type='text'
						placeholder='Search Allergies'
						onChange={algFilter}
					/>
				</div>

				<div className={classes.alg_tags}>
					{algs.map((alg) => {
						return <Tag data={alg} onClick={onClick} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Alg;
