import React, {useState, useEffect, useContext}  from "react";
import { Route } from 'react-router-dom';
import { AppContext } from "../../Context/AppContext";

// templates
import {Template404} from '../../Templates/Template404';
import {TemplateHome} from '../../Templates/TemplateHome';
import {TemplateArticle} from '../../Templates/TemplateArticle';
import {TemplateSearch} from '../../Templates/TemplateSearch';
import {TemplateRubrique} from '../../Templates/TemplateRubrique';

/**
 * @description à modifier suivant les projets
 */
const DynamicTemplate = {
	'Template 404': Template404,
	'Template Home': TemplateHome,
	'Template Article': TemplateArticle,
	'Template Rubrique': TemplateRubrique,
	'Template Search': TemplateSearch,
};

/**
 * @component 
 * @description crer des routes en fonction des données JSON et utilise la correspondance nom côté back // nom component côté front
 * @param {object} route data des routes 
 */
export function RouteForTemplates(route) {
	const [path, setPath] = useState(route.path);
	let lang = useContext(AppContext).lang;

	
	useEffect(()=>{
		
		switch(lang){
			case 'fr': 
				setPath(route.path_fr)
			break;
			case 'en': 
				setPath(route.path_en);
			break;
			default:
				setPath(route.path)
			break;
		}
		
	},[lang, route.path_fr, route.path, route.path_en])

	return (
		<Route
			path={path}
			name={route.name}
			render={() => React.createElement(DynamicTemplate[route.component], { key: route._uid, ...route.datas, _uid: route._uid })}
		/>
	);
}