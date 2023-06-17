import axios from "axios";
import bcrypt from "bcrypt";

const handler = async (req, res) => {
	const loginHandler = async (userCredentials) => {
		let fetchedUser = { isUser: false };

		// console.log("here");

		const response = await fetch(
			"https://ezdev-portfolio-1682048067466-default-rtdb.europe-west1.firebasedatabase.app/users.json"
		);

		await response.json().then((data) =>
			Object.values(data).forEach(async (user) => {
				// console.log("user: " + user);
				// console.log("userCredentials", userCredentials);
				console.log("submitted password", userCredentials.userPassword);
				console.log("fetched password", user.password);
				console.log(
					"compared",
					await bcrypt.compare(userCredentials.userPassword, user.password)
				);
				if (
					user.email == userCredentials.userEmail
					// &&
					// (await bcrypt.compare(userCredentials.userPassword, user.password))
					// user.password == userCredentials.userPassword
				) {
					if (
						await bcrypt.compare(userCredentials.userPassword, user.password)
					) {
						fetchedUser = {
							isUser: true,
							email: user.email,
							name: user.name,
							userId: user.userId,
						};
						return res.status(200).json(fetchedUser);
					}
				}
			})
		);

		// return res.status(200).json(fetchedUser);
	};

	const registerHandler = async (userCredentials) => {
		// let fetchedUser = { isUser: false };

		// console.log(userCredentials);

		let lastUserId;
		let newUser;
		const hash = await bcrypt.hash(userCredentials.userPassword, 10);

		try {
			await axios
				.get(
					"https://ezdev-portfolio-1682048067466-default-rtdb.europe-west1.firebasedatabase.app/users.json"
				)
				.then((response) => {
					// console.log(response.data);
					Object.values(response.data).forEach((user) => {
						// console.log(user);
						lastUserId = user.userId;
					});
				});
			newUser = {
				email: userCredentials.userEmail.toLowerCase(),
				name: userCredentials.userName.toLowerCase(),
				password: hash,
				userId: lastUserId + 1,
			};
			try {
				console.log("here");
				await axios.post(
					"https://ezdev-portfolio-1682048067466-default-rtdb.europe-west1.firebasedatabase.app/users.json",
					newUser
				);
				return res.status(200).json("successfully registered");
			} catch (error) {
				console.log("error registering:", error.message);
			}
		} catch (error) {
			console.log("error getting users:", error.message);
		}
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
