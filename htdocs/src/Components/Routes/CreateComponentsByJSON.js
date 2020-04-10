import React from "react";
// import {  VideoBig } from '../components/Videos';
// import { TextKeyfigure } from "../components/TextKeyFigure";
// import { KeyFigure } from '../components/Keyfigure';
// import { Text } from "../components/Text";
// import { Text2Col } from "../components/Text2col";
// import { TextVerbatim } from "../components/TextVerbatim";
// import { Verbatim } from "../components/Verbatim";
// import { TextImage } from "../components/TextImage";
// import { Team } from "../components/Team";
// import { Slider } from "../components/Slider";
// import { TextSlider } from "../components/TextSlider";
// import { Loader } from "../components/Loader";

/**
 * Déclaration de la corresspondance nom reçu / nom du composant
 * 
 */
const DynamicComponents = {
	// "text": Text,
	// "text2col": Text2Col,
	// "textKeyfigure" : TextKeyfigure,
	// "textVerbatim" : TextVerbatim,
	// "textImage" : TextImage,
	// "verbatim" : Verbatim,
	// "videobig" : VideoBig,
	// "keyfigure": KeyFigure,
	// "team" : Team,
	// "slider" : Slider,
	// "textSlider": TextSlider
}


/**
 * ## Generation des composants dynamiquement suivant JSON 
 * @param {object} block 
 * cf : https://www.storyblok.com/tp/react-dynamic-component-from-json
 */
export const CreateComponentsByJSON = (block) => {
	
	if (typeof DynamicComponents[block.component] !== "undefined") {
		return React.createElement(DynamicComponents[block.component], {
		  key: block._uid,
		  ...block.datas
		});
	  }
	  // component doesn't exist yet
	  return React.createElement(
		() => <Loader />,
		{ key: block._uid }
	  );
}


