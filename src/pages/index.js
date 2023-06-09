// import Image from 'next/image'
// import { Inter } from 'next/font/google'

import FilmList from "@/components/films/FilmList";

// import { firestore } from "@/firebase/clientApp";
// import {
// 	collection,
// 	QueryDocumentSnapshot,
// 	DocumentData,
// 	query,
// 	where,
// 	limit,
// 	getDocs,
// } from "@firebase/firestore";

// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, child, get } from "firebase/database";
// import { firebaseConfig } from "@/firebase/clientApp";

// import { useState, useEffect } from "react";

// const inter = Inter({ subsets: ['latin'] })

const Home = () => {
	// const app = initializeApp(firebaseConfig);
	// const database = getDatabase(app);

	// console.log(database);

	// const dbRef = ref(getDatabase());

	// get(child(dbRef, `/users`))
	// 	.then((snapshot) => {
	// 		if (snapshot.exists()) {
	// 			console.log(snapshot.val());
	// 		} else {
	// 			console.log("No data available");
	// 		}
	// 	})
	// 	.catch((error) => {
	// 		console.error(error);
	// 	});

	// const usersCollection = collection(firestore, "users");
	// console.log(firestore);
	// const [users, setUsers] = useState([]);
	// const [loading, setLoading] = useState(true);

	// const getUsers = async () => {
	// 	const usersQuery = query(
	// 		usersCollection,
	// 		where("name", "==", "Anthony"),
	// 		limit(10)
	// 	);

	// 	const querySnapshot = await getDocs(usersQuery);

	// 	const result = [];
	// 	querySnapshot.forEach((snapshot) => {
	// 		result.push(snapshot);
	// 	});

	// 	setUsers(result);
	// };

	// useEffect(() => {
	// 	getUsers();
	// 	setTimeout(() => {
	// 		setLoading(false);
	// 	}, 2000);
	// }, []);

	// setTimeout(() => {
	// 	console.log(users);
	// }, 2000);

	return (
		<>
			<FilmList />
		</>
	);
};

export default Home;
