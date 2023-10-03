import React, { useState } from 'react';
import { Button } from '../Button';

export const Section = ({
	authorId,
	bookCollaborators,
	id,
	title,
	sections,
	onAddSubsection,
	bookId,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [myTitle, setTitle] = useState(title);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};
	console.log(bookCollaborators);
	const currentUser = JSON.parse(localStorage.getItem('user') ?? '');
	let book = bookCollaborators?.find(
		(bookCollab) => bookCollab?.bookId === bookId
	);
	let inPutWorking = true;
	if (
		book?.collaborators?.find((i) => i === currentUser?.id) ||
		authorId === currentUser?.id
	) {
		inPutWorking = false;
	}

	return (
		<div className="section">
			<div
				className="border
      border-gray-200
      rounded-md
      flex
      justify-between
      items-center
      my-1 px-2 py-1
      gap-2
      "
			>
				<h2>
					<button onClick={handleToggle}>
						{sections?.length !== 0 && (isOpen ? '-' : '+')}
					</button>{' '}
					<input
						disabled={inPutWorking}
						value={myTitle}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</h2>
				{inPutWorking || (
					<Button onClick={() => onAddSubsection(id, bookId)}>+</Button>
				)}
			</div>
			<div className="pl-14">
				{isOpen &&
					sections &&
					sections?.map((subsection) => (
						<Section
							authorId={authorId}
							bookCollaborators={bookCollaborators}
							key={subsection?.id}
							id={subsection?.id}
							bookId={bookId}
							title={subsection?.title}
							sections={subsection?.sections ? subsection?.sections : []}
							onAddSubsection={onAddSubsection}
						/>
					))}
			</div>
		</div>
	);
};
