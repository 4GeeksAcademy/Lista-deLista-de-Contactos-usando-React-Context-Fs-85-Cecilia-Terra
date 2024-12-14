import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3 d-flex justify-content-end" style={{ backgroundColor: "white" }}>

			<div className="ml-auto" style={{ position: 'relative' }}>
				<Link to="/addcontacts">
					<button className="btn btn-success" style={{ position: 'absolute', left: '-260px', top: '10px' }}> Add new Contact</button>
				</Link>
			</div>

		</nav>
	);
};
