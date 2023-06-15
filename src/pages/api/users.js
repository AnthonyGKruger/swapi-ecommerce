// const handler = async (req, res) => {

// 	const fetchData = async (userCredentials) => {
// 		let fetchedUser = { isUser: false };

// 		const response = await fetch(
// 			"https://ezdev-portfolio-1682048067466-default-rtdb.europe-west1.firebasedatabase.app/users.json"
// 		);

// 		await response.json().then((data) => {
// 			data.forEach((user) => {
// 				if (
// 					JSON.stringify(user.email) ==
// 						JSON.stringify(userCredentials.userEmail) &&
// 					JSON.stringify(user.password) ==
// 						JSON.stringify(userCredentials.userPassword)
// 				) {
// 					fetchedUser = {
// 						isUser: true,
// 						email: user.email,
// 						name: user.name,
// 						userId: user.userId,
// 					};
// 				}
// 			});
// 		});

// 		return res.status(200).json(fetchedUser);
// 	};

// 	if (req.method === "POST") {
// 		await fetchData(JSON.parse(req.body));
// 	}
// };

// export default handler;

const handler = async (req, res) => {
	const fetchData = async (userCredentials) => {
		let fetchedUser = { isUser: false };

		// console.log("here");

		const response = await fetch(
			"https://ezdev-portfolio-1682048067466-default-rtdb.europe-west1.firebasedatabase.app/users.json"
		);

		await response.json().then((data) =>
			Object.values(data).forEach((user) => {
				console.log("user: " + user);
				console.log("userCredentials", userCredentials);
				if (
					user.email == userCredentials.userEmail &&
					user.password == userCredentials.userPassword
				) {
					fetchedUser = {
						isUser: true,
						email: user.email,
						name: user.name,
						userId: user.userId,
					};
				}
			})
		);

		console.log(fetchedUser);

		// await response.json().then((data) => {
		// 	data.forEach((user) => {
		// 		if (
		// 			JSON.stringify(user.email) ==
		// 				JSON.stringify(userCredentials.userEmail) &&
		// 			JSON.stringify(user.password) ==
		// 				JSON.stringify(userCredentials.userPassword)
		// 		) {
		// 			fetchedUser = {
		// 				isUser: true,
		// 				email: user.email,
		// 				name: user.name,
		// 				userId: user.userId,
		// 			};
		// 		}
		// 	});
		// });

		return res.status(200).json(fetchedUser);
	};

	if (req.method === "POST") {
		console.log("1", req.body);
		await fetchData(req.body);
		// await fetchData(JSON.parse(req.body));
	}
};

export default handler;
