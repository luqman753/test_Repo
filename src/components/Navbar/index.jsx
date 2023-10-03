import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const navigate = useNavigate();
	return (
		<nav className="flex bg-blue-500 text-white p-4 text-center font-semibold justify-between">
			<Link to="/">EBOOK</Link>
			<div className="flex space-x-6 justify-between">
				<Link to="/add-collaborator">Add Collaborator</Link>

				<Link
					to="/"
					onClick={() => {
						localStorage.clear();
						window.location.reload();
					}}
				>
					Logout
				</Link>
			</div>
		</nav>
	);
};
