import React, { useState, useContext, useEffect } from 'react';
import * as translation from './Translate.json.json';
import { AppContext } from '../../Context/AppContext';


/**
 * @component
 * 	## Renvoie une traduction 
 * @example
 * <Translate keyword="motcle"/>
 * @param {string} keyword mot clé à traduire
 * @returns {string} mot clé traduit suivant langue
 */

export const Translate = ({keyword}) => {
	let [ word, setWord] = useState('…');
	let lang = useContext(AppContext.lang);
	
	useEffect(()=>{
		setWord(translation.default[keyword][lang])
	},[lang, keyword]);

	return(
		<>{ word } </>
	)
};