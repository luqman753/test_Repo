import React from 'react';
import { Navigate } from 'react-router-dom';

export const AuthorizedRoutes = ({ children }) => {
	const token = localStorage.getItem('token');
	return token ? children : <Navigate to="/login" />;
};

export const UnAuthorizedRoutes = ({ children }) => {
	const token = localStorage.getItem('token');
	return !token ? children : <Navigate to="/" />;
};
