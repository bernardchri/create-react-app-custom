import React, { useState } from "react";
import "./Header.scss";
import { Menu } from "./Menu";


export const Header = ({title, nav}) => {
	const [open, setOpen] = useState(false);
	const closeMenu = (e) => {
		open ? setOpen(false) : setOpen(true);	
	}
	return(
		<div className="Header">
			Header
			{title}
			<Menu items= {nav} closeMenu={closeMenu} />
		</div>
	)
}



