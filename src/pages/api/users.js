// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
	// const users = async () => {
	// 	const response = await fetch(
	// 		"https://ezdev-portfolio-1682048067466-default-rtdb.europe-west1.firebasedatabase.app/users.json"
	// 	);
	// 	const data = response.json();
	// 	// const data = JSON.parse(response);
	// 	console.log(data);
	//   return data;
	// 	// console.log(data);
	// };
	// const userData = users();

	// const fetchData = async () => {
	// 	await fetch(
	// 		"https://ezdev-portfolio-1682048067466-default-rtdb.europe-west1.firebasedatabase.app/users.json"
	// 	)
	// 		.then((response) => {
	//       console.log(response);
	// 			response.json();
	// 		})
	// 		.then((data) => {
	// 			console.log(data);
	// 		});
	// };

	const fetchData = async () => {
		const response = await fetch(
			"https://ezdev-portfolio-1682048067466-default-rtdb.europe-west1.firebasedatabase.app/users.json"
		);

		const jsonData = await response.json();

		// return jsonData;
		return res.status(200).json(jsonData);
	};

	await fetchData();
	// return res.status(200).json(fetchData());
};

export default handler;
