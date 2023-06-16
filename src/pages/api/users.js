const handler = async (req, res) => {
	const loginHandler = async (userCredentials) => {
		let fetchedUser = { isUser: false };

		// console.log("here");

		const response = await fetch(
			"https://ezdev-portfolio-1682048067466-default-rtdb.europe-west1.firebasedatabase.app/users.json"
		);

		await response.json().then((data) =>
			Object.values(data).forEach((user) => {
				// console.log("user: " + user);
				// console.log("userCredentials", userCredentials);
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

		return res.status(200).json(fetchedUser);
	};

	const registerHandler = async (userCredentials) => {
		// let fetchedUser = { isUser: false };

		console.log("here");

		try {
			const response = await axios.post(
				"https://ezdev-portfolio-1682048067466-default-rtdb.europe-west1.firebasedatabase.app/users.json",
				userData
			);
			return response.data;
		} catch (error) {
			return error.message;
		}

		return res.status(200).json(fetchedUser);
	};

	if (req.method === "POST") {
		if (req.body.action == "login") {
			await loginHandler(req.body);
		}
	}
};

export default handler;
