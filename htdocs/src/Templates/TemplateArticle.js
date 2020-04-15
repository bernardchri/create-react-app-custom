import React from "react"
import {ComponentFromJSON} from '../Components/Routes/ComponentFromJSON'
import {Wrapper} from "../Components/Wrappers/Wrapper";


export const TemplateArticle = () => {
	let dataArticle = require('./TemplateArticle.json');
	let {flexibles} = dataArticle;

	return(
		<>
			<Wrapper>
			Template Article
			<div className="Flexibles">
				{flexibles.map((block) => ComponentFromJSON(block))}
			</div>
			</Wrapper>
		</>
	)
}