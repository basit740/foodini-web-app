import React from 'react';
import sty from '../../styles/review.module.css';
import Tag from '../utils/Tag/Tag';

const Review = ({ algs, dtpf, fdGroups }) => {
	let firstRowExcluded = [];
	let secondRowExcluded = [];
	fdGroups.forEach((item) => {
		if (item.excluded) {
			if (firstRowExcluded.length < 2) {
				firstRowExcluded.push(item);
			} else {
				secondRowExcluded.push(item);
			}
		}
	});
	return (
		<div className={sty.review}>
			<section className={sty.dtpf_section}>
				<div className={sty.review_heading}>
					<div className='d-flex ali-center gap-32'>
						<p className={`number`}>3</p>
						<h3>Review</h3>
					</div>
					<p className='w-700'>
						You can review your selected preferences to make sure we've got it
						right. If you need to change anything, you can go and to the
						previous screen and edit your preferences.
					</p>
				</div>
				<div className={sty.review_body}>
					<h4>Your Dietary Preferences</h4>
					<div className={sty.dtpf_content}>
						{dtpf.map((item) => {
							if (item.selected) {
								return <Tag data={item} />;
							}
							return null;
						})}
						<div className={sty.df_excluded}>
							<span>
								FODMAP - Excl.{' '}
								{firstRowExcluded.map((item) => {
									return <>{item.title + ', '}</>;
								})}
							</span>
							<span>
								{secondRowExcluded.map((item) => {
									return <>{item.title + ', '}</>;
								})}
							</span>
						</div>
					</div>
				</div>
			</section>

			<section className={sty.alg_section}>
				<div className={sty.review_body}>
					<h4>Your Allergies</h4>
					<div className={sty.algs_content}>
						{algs.map((alg) => {
							if (alg.selected) {
								return <Tag data={alg} />;
							}
							return null;
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Review;
