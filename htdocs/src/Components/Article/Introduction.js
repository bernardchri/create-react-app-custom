import React from "react";
import './Introduction.scss';


export const Introduction = ({title, text}) => {
	return(
		<div className="Introduction">
			<h1 className="Introduction_title">{title}</h1>
			<div className="Introduction_text">{text}</div>
		</div>
	)
}