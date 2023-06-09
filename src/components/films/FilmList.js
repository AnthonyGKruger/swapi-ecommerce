import { useEffect, useState } from "react";
import CardList from "../UI/CardList";
import Title from "../UI/Title";
import Loader from "../UI/Loader";

const FilmList = () => {
	const [cardData, setCardData] = useState();

	const urls = {
		"A New Hope": {
			productLink: "/films/A New Hope",
			imageLink: "/media/images/films/New-Hope.jpeg",
		},
		"The Empire Strikes Back": {
			productLink: "/films/The Empire Strikes Back",
			imageLink: "/media/images/films/Empire-Strikes-Back.jpeg",
		},
		"Return of the Jedi": {
			productLink: "/films/Return of the Jedi",
			imageLink: "/media/images/films/Return-Jedi.jpeg",
		},
		"The Phantom Menace": {
			productLink: "/films/The Phantom Menace",
			imageLink: "/media/images/films/Phantom-Menace.jpeg",
		},
		"Attack of the Clones": {
			productLink: "/films/Attack of the Clones",
			imageLink: "/media/images/films/Attack-Clones.jpeg",
		},
		"Revenge of the Sith": {
			productLink: "/films/Revenge of the Sith",
			imageLink: "/media/images/films/Revenge-Sith.jpeg",
		},
	};

	const fetchData = async () => {
		try {
			const response = await fetch("https://swapi.dev/api/films");
			const data = await response.json();
			setCardData(data);
		} catch (err) {
			console.log("Something went wrong: ", err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			{!cardData && <Loader />}
			{cardData && (
				<>
					<Title content="Browse films" />
					<CardList cardData={cardData} urls={urls} />
				</>
			)}
		</>
	);
};

export default FilmList;
