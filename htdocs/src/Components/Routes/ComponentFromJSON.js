import React from "react";
import { Loader } from "../Loaders/Loader";
import { Introduction } from "../Article/Introduction";
import { Quote } from "../Article/Quote";

/**
 * Déclaration de la corresspondance nom reçu / nom du composant
 * 
 */
const DynamicComponents = {
	"Introduction": Introduction,
	"Quote": Quote
}


/**
 * ## Generation des composants dynamiquement suivant JSON 
 * @param {object} block 
 * cf : https://www.storyblok.com/tp/react-dynamic-component-from-json
 */
export const ComponentFromJSON = (block) => {
	
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


