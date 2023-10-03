import { appConfig } from '../constants';

export const collaborators = {
	get: () =>
		new Promise((resolve, reject) => {
			fetch(`${appConfig.baseUrl}/collab`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
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
		}),
	getByBookId: (bookId) =>
		new Promise((resolve, reject) => {
			fetch(`${appConfig.baseUrl}/collab?bookId=${bookId}`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
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
		}),
	update: (id, collaborator) => {
		return new Promise((resolve, reject) => {
			fetch(`${appConfig.baseUrl}/collab/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(collaborator),
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
		});
	},
	add: (data) => {
		return new Promise((resolve, reject) => {
			fetch(`${appConfig.baseUrl}/collab`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
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
		});
	},
};
