import React from 'react';
import './Wrapper.scss';

/**
 * @param {DOM} children
 * @param {string} className
 */
export const Wrapper = ({ children, className ='Component' }) => {

	return (
		<div className={`${className}`}>
			<div className={`${className}_wrapper Wrapper`}>{children}</div>
		</div>
	);
};
