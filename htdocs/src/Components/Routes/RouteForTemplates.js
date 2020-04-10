import React, {useState, useEffect, useContext}  from "react";
import { BrowserRouter as Router, Route, useHistory, useLocation } from 'react-router-dom';
import { AppContext } from "../../Context/AppContext";

// templates
// import Template404 from '../templates/Template404';
// import TemplateHome from '../templates/TemplateHome';
// import TemplateTeam from '../templates/TemplateTeam';
// import TemplateArticle from '../templates/TemplateArticle';
// import TemplateArticles from '../templates/TemplateArticles';
// import TemplateAgenda from '../templates/TemplateAgenda';
// import TemplateVideos from '../templates/TemplateVideos';
// import TemplateSearch from '../templates/TemplateSearch';

/**
 * @description à modifier suivant les projets
 */
const DynamicTemplate = {
	// 'Template 404': Template404,
	// 'Template Home': TemplateHome,
	// 'Template Articles': TemplateArticles,
	// 'Template Article': TemplateArticle,
	// 'Template Team': TemplateTeam,
	// 'Template Agenda': TemplateAgenda,
	// 'Template Search': TemplateSearch,
	// 'Template Videos': TemplateVideos
};

/**
 * @component 
 * @description crer des routes en fonction des données JSON et utilise la correspondance nom côté back // nom component côté front
 * @param {object} route data des routes 
 */
export function RouteForTemplates(route) {
	const [path, setPath] = useState(route.path);
	
	let lang = useContext(AppContext.lang);
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
	},[lang, history, route.path_fr, route.path, route.path_en, search])



	return (
		<Route
			path={path}
			name={route.name}
			render={() => React.createElement(DynamicTemplate[route.component], { key: route._uid, ...route.datas, _uid: route._uid })}
		/>
	);
}