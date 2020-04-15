import React from "react"
import './Quote.scss'

export const Quote = ({text, name, description}) => {
	return(
		<div className="Quote">
			<h3 className="Quote_text">{text}</h3>
			<div className="Quote_meta">
				<div className="Quote_name">{name}</div>
				<div className="Quote_description">{description}</div>
			</div>
		</div>
	)
}