import { useRouter } from "next/router";
import Card from "./Card";
import { useEffect, useState } from "react";

const CardList = ({ cardData, urls }) => {
	const [cards, setCards] = useState([]);
	const { asPath } = useRouter();

	useEffect(() => {
		setCards(
			cardData.results.map((data) => {
				if(!asPath.includes(data.title.replaceAll(" ", "%20"))){
					return (
					<Card
						title={data.title}
						subHeading={data.release_date}
						details={data.opening_crawl}
						imageUrl={urls[data.title].imageLink}
						link={urls[data.title].productLink}
						key={data.title}
					/>
				);
				}
				
			})
		);
	}, []);

	return (
		<section className="py-10">
			<div className="container px-5 m-auto">
				<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
					{cards}
				</div>
			</div>
		</section>
	);
};

export default CardList;
