import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.scss'

export const Menu = ( {items, closeMenu} ) => {
	return(
		<div className="Menu">
			{items.map( (item, index) => <div className="Menu_items" key={index}>
					<NavLink 
						activeClassName="selected" 
						to={item.url} 
						onClick={closeMenu}
						>
						{item.name}
					</NavLink>
				</div> )}
		</div>
	)
}