import { appConfig } from '../constants';

export const authService = {
	login: (email, password) =>
		new Promise((resolve, reject) => {
			if (email === '' || password === '') {
				reject(new Error('Email and password are required'));
			} else {
				fetch(`${appConfig.baseUrl}/login`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						email,
						password,
					}),
				})
					.then(async (res) => {
						let response = await res.json();
						if (res.ok) {
							resolve(response);
						} else {
							reject(new Error(response));
						}
					})
					.catch((error) => reject(error));
			}
		}),
	register: (name, email, password) =>
		new Promise((resolve, reject) => {
			if (email === '' || password === '' || name === '') {
				reject(new Error('Name, Email and password are required'));
			} else {
				fetch(`${appConfig.baseUrl}/register`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						name,
						email,
						password,
					}),
				})
					.then(async (res) => {
						let response = await res.json();
						if (res.ok) {
							resolve(response);
						} else {
							reject(new Error(response));
						}
					})
					.catch((error) => reject(error));
			}
		}),
};
