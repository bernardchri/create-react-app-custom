import { useState, useEffect, useContext } from 'react';
import Axios from 'axios';

/**
 * @async Creation d'un hook d'appel des API
 * **Utilisation sur Team, Agenda, Videos, Contacts, Article, Search**
 * @param {sting} name nom de l'API 
 * @param {sting} _uid ID du template
 * @param {sting} slug nom d'article
 * @param {sting} termOfSearch terme à rechercher ?s= 
 * @returns {[Array, Boolean]} data Datafetch = [ JSON], isLoaded = false]
 */

export default ({ name='', slug, _uid, termOfSearch }) => {
	const lang = useContext(AppContext.lang);
	const [ dataFetch, setDataFetch ] = useState([]);
	const [ isLoaded, setIsLoaded ] = useState(false);

	useEffect(
		() => {
			setIsLoaded(false)
			let load = false;

			const fetchAPi = async () => {
				try {
					const dataFetch = await Axios(
						`${process.env.REACT_APP_APP}/wp-json/vrse/v1/${name}${lang ? `?lang=${lang.selected}` : ''}${termOfSearch ? `&s=${termOfSearch}` : ''}${slug ? `&slug=${slug}` : ''}${_uid ? '&_uid=' + _uid : ''}`
					);
					if (!load) setDataFetch(dataFetch.data);
					if (!load) setIsLoaded(true);
					// console.log('Name:', name, 'URL', dataFetch.config.url, 'dataFetch:', dataFetch.data, typeof dataFetch.data);
				} catch (err) {
					// console.err(err)
				}
			};
			fetchAPi();

			return () => {
				load = true;
			};
		},
		[ lang, name, _uid, slug, termOfSearch ]
	);

	// si l'api renvoi un string on le converti en JSON avant de retourner
	return [ typeof dataFetch == 'string' ? JSON.parse(dataFetch) : dataFetch, isLoaded ];
};
