import axios from "axios";

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

		// console.log(userCredentials);

		let lastUserId;
		let newUser;

		try {
			await axios
				.get(
					"https://ezdev-portfolio-1682048067466-default-rtdb.europe-west1.firebasedatabase.app/users.json"
				)
				.then((response) => {
					// console.log(response.data);
					Object.values(response.data).forEach((user) => {
						console.log(user);
						lastUserId = user.userId;
					});
				});
			newUser = {
				email: userCredentials.userEmail.toLowerCase(),
				name: userCredentials.userName.toLowerCase(),
				password: userCredentials.userPassword,
				userId: lastUserId + 1,
			};
			try {
				console.log("here");
				await axios.post(
					"https://ezdev-portfolio-1682048067466-default-rtdb.europe-west1.firebasedatabase.app/users.json",
					newUser
				);
			} catch (error) {
				console.log("2", error.message);
			}
		} catch (error) {
			console.log("1", error.message);
		}

		return res.status(200).json("successfully registered.");
	};

	if (req.method === "POST") {
		if (req.body.action == "login") {
			await loginHandler(req.body);
		} else if (req.body.action == "register") {
			await registerHandler(req.body);
		}
	}
};

export default handler;
