import Loader from "@/components/UI/Loader";
import FilmList from "@/components/films/FilmList";
import FilmProductSection from "@/components/films/FilmProductSection";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Product = () => {
	const router = useRouter();

	const [film, setFilm] = useState();
	const [filmLink, setFilmLink] = useState();

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

	const fetchTitle = async () => {
		try {
			const response = await fetch("https://swapi.dev/api/films");
			const data = await response.json();
			data.results.forEach((film) => {
				if (film.title === router.query.film) {
					setFilmLink(film.url);
				}
			});
		} catch (err) {
			console.log("Something went wrong: ", err);
		}
	};

	const fetchFilm = async () => {
		try {
			const response = await fetch(filmLink);
			const data = await response.json();
			setFilm(data);
		} catch (err) {
			console.log("Something went wrong: ", err);
		}
	};

	useEffect(() => {
		fetchTitle();
	}, [router]);

	useEffect(() => {
		if (filmLink) {
			fetchFilm();
		}
	}, [filmLink]);

	return (
		<>
			{!film && <Loader/>}
			{film && <FilmProductSection filmData={film} urls={urls[film.title]} />}
			{film && <FilmList />}
		</>
	);
};

export default Product;
