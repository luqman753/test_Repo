import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components';
import { authService, ebooks } from '../../api';
import Modal from '../../components/Modal';
import { collaborators } from '../../api/collaborator';
import { userServices } from '../../api/user';

const AddCollaborator = () => {
	const [ebookData, setEbookData] = useState([]);
	const [users, setUsers] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		ebooks
			.get()
			.then((res) => {
				setEbookData(res);
			})
			.catch((err) => {
				console.log(err);
			});

		collaborators
			.get()
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
		userServices
			.get()
			.then((res) => {
				const currentUser = JSON.parse(localStorage.getItem('user') ?? '');
				if (currentUser) {
					setUsers(res.filter((user) => user.id !== currentUser.id));
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const AddCollaborator = (id, bookId) => {
		let collaboratorsArr = [];

		collaborators
			.getByBookId(bookId)
			.then((res) => {
				if (res.length > 0) {
					collaboratorsArr = res[0].collaborators;
					if (!collaboratorsArr.includes(id)) {
						collaboratorsArr.push(id);
					}
					const updateData = {
						bookId: bookId,
						collaborators: collaboratorsArr,
					};

					collaborators
						.update(res[0].id, updateData)
						.then((res) => {
							console.log(res);
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					collaboratorsArr.push(id);
					const data = {
						bookId: bookId,
						collaborators: collaboratorsArr,
					};
					collaborators
						.add(data)
						.then((res) => {
							console.log(res);
						})
						.catch((err) => {
							console.log(err);
						});
				}
				setIsOpen(false);
			})
			.catch((err) => {
				console.log(err);
				setIsOpen(false);
			});
	};

	return (
		<div>
			<Navbar />
			<div className="flex flex-col items-center justify-center">
				{ebookData &&
					ebookData?.map((book) => {
						return (
							<div
								key={book.id}
								className="flex rounded-md justify-between items-center w-[400px] mt-2 p-2 px-4  h-1/2 bg-gray-200"
							>
								<h5>{book.title}</h5>
								<button
									onClick={() => {
										setIsOpen(true);
									}}
									className="bg-blue-500 text-white p-2 rounded-md"
								>
									Add Collaborator
								</button>
								<Modal
									isOpen={isOpen}
									onClose={() => {
										setIsOpen(false);
									}}
								>
									<div className="flex flex-col items-center justify-center bg-white">
										{users &&
											users?.map((user) => {
												return (
													<div
														key={user.id}
														className="flex items-center w-[200px] m-2 justify-between gap-4"
													>
														<h5>{user.name}</h5>
														<button
															className="bg-blue-500 text-white p-1 rounded-md"
															onClick={() => {
																AddCollaborator(user.id, book.id);
															}}
														>
															Add
														</button>
													</div>
												);
											})}
									</div>
								</Modal>
							</div>
						);
					})}
			</div>
			<div></div>
		</div>
	);
};

export default AddCollaborator;
