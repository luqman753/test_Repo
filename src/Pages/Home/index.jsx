import React, { useState, useEffect } from 'react';
import { Navbar, Button, Section } from '../../components';
import { collaborators, ebooks } from '../../api';

const Home = () => {
	const [ebookData, setEbookData] = useState([]);
	const [bookCollaborators, setBookCollaborators] = useState([]);

	useEffect(() => {
		ebooks
			.getAll()
			.then((res) => {
				setEbookData(res);
			})
			.catch((err) => {
				console.log(err);
			});
		collaborators
			.get()
			.then((res) => {
				setBookCollaborators(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleAddSubsection = (id, bookId) => {
		const newEbookData = JSON.parse(JSON.stringify(ebookData));

		const findSection = (sections) => {
			for (const section of sections) {
				if (section.id === id) {
					if (!section.sections) {
						section.sections = [];
					}
					section.sections.push({
						id: Math.random().toString(36).substr(2, 9),
						title: 'New Subsection',
						sections: [],
					});
					return true;
				} else if (findSection(section.sections)) {
					return true;
				}
			}
			return false;
		};

		findSection(newEbookData);
		setEbookData(newEbookData);
		ebooks
			.addSection(
				bookId,
				newEbookData.find((book) => {
					return book.id === bookId;
				})
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleAddSection = () => {
		const newEbookData = JSON.parse(JSON.stringify(ebookData));

		ebooks
			.addBook({
				title: `New Book - ${newEbookData.length + 1}`,
				authorId: JSON.parse(localStorage.getItem('user')).id,
				sections: [],
			})
			.then((res) => {
				newEbookData.push(res);
				setEbookData(newEbookData);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="App">
			<Navbar />
			<div className="flex flex-col justify-center items-center my-10">
				<Button onClick={handleAddSection}>Create New Book</Button>
				<div className="border border-gray-200 rounded-md p-10 my-5">
					{ebookData?.map((ebook) => (
						<Section
							authorId={ebook?.authorId}
							bookCollaborators={bookCollaborators}
							key={ebook?.id}
							id={ebook?.id}
							title={ebook?.title}
							bookId={ebook?.id}
							sections={ebook?.sections}
							onAddSubsection={handleAddSubsection}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
