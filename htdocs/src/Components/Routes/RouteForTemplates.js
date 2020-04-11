import React, {useState, useEffect, useContext}  from "react";
import { Route, useHistory, useLocation } from 'react-router-dom';
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

	let history = useHistory();
	let search = useLocation().search; // si recherche type http://monurl.com/recherche?=texte
	let hash = useLocation().hash // si recherche avec # dans l'url
	
	useEffect(()=>{
		
		switch(lang){
			case 'fr': 
				history.push({pathname : route.path_fr, search, hash})
				setPath(route.path_fr)
			break;
			case 'en': 
				history.push({pathname : route.path_en, search, hash}) 
				setPath(route.path_en);
			break;
			default:
				setPath(route.path)
			break;
		}
		
	},[lang, history, route.path_fr, route.path, route.path_en, search, hash])

	return (
		<Route
			path={path}
			name={route.name}
			render={() => React.createElement(DynamicTemplate[route.component], { key: route._uid, ...route.datas, _uid: route._uid })}
		/>
	);
}