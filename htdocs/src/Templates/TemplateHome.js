import React from "react"
import { Wrapper } from "../Components/Wrappers/Wrapper"

export const TemplateHome = () => {
	return(
		<>
		Home <br/>
		<Wrapper>
			mon contenu
		</Wrapper>
		<Wrapper className="ComponentType02">
			mon contenu
		</Wrapper>
		</>
	)
}