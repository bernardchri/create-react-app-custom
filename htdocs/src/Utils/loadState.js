/**
 * ## Chargement dans le localstorage.
 * @function loadState 
 * @description localstorage peut parfois rater (exemple : naviguation privé) c'est pourquoi il est important d'utiliser la méthode try/catch
 * @param {string} name nom dans le local storage
 * @see https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
 */
export const loadState = (name) => {
	try {
		const serrializedState = localStorage.getItem(name);
		if (serrializedState === null) {
			return undefined;
		}
		return JSON.parse(serrializedState);
	} catch (err) {
		return undefined;
	}
};

/**
 * ## Sauvegarde le localstorage.
 * @function saveState
 * @description localstorage peut parfois rater (exemple : naviguation privé) c'est pourquoi il est important d'utiliser la méthode try/catch
 * @param {string} name nom dans le local storage
 * @param {JSON} state  objet || string || array transformé en string
 * @see https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
 */
export const saveState = (name, state) => {
	try {
		const serrializedState = JSON.stringify(state);
		localStorage.setItem(name, serrializedState);
	} catch (err) {
		//  Ignore write error
	}
};
