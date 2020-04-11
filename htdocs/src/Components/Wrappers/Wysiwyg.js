import React from 'react';

/**
 * @component
 * ##  Wysiwyg
 * Rendre markup généré par le backoffice dans une div
 * Avec la Method : dangerouslySetInnerHTML
 * @example
 * const text = '<p>mon text <span>super</span></p>';
 * return <Wysiwyg>{text}</Wysiwyg>
 * @param {string} className optionnel
 * @param {string} children
 * */

export const Wysiwyg = ({className,children}) => {

	const renderMarkup = (markup) => {
		return { __html: markup };
	};

	return(
		<div className={className} dangerouslySetInnerHTML={renderMarkup(children)} ></div>
	)
}


