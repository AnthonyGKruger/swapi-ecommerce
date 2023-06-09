import Image from "next/image";
import Title from "../UI/Title";
import { useSelector } from "react-redux";

const FilmProductSection = ({ filmData, urls }) => {
	const userState = useSelector((state) => state.user);
	// console.log(userState)

	return (
		<section className="py-5 mx-10 lg:mx-24 xl:mx-52">
			<Title
				content={`Star Wars Episode ${filmData.episode_id}: ${filmData.title}`}
			/>
			<div className="container px-6 m-auto py-10">
				<div className="grid grid-cols-4 gap-6 md:grid-cols-4 lg:grid-cols-12">
					<div className="col-span-4 lg:col-span-5 rounded-xl">
						<Image
							width={400}
							height={100}
							src={urls.imageLink}
							className="rounded-xl md:mx-auto"
							alt={filmData.title}
							priority
						/>
					</div>
					<div className="col-span-4 lg:col-span-7 rounded-xl border-yellow-700 border-2 backdrop-blur-xl text-slate-50 shadow-md shadow-yellow-700">
						<section className="p-5">
							<span className="text-xl text-yellow-600">{`Star Wars Episode ${filmData.episode_id}: ${filmData.title}`}</span>
							<p className="text-sm text-yellow-700 mt-5">
								Release Date: <br />
								<span className="text-white">{filmData.release_date}</span>
							</p>
							<p className="text-sm text-yellow-700">
								Director: <br />
								<span className="text-white">{filmData.director}</span>
							</p>
							<p className="text-sm text-yellow-700">
								Producer: <br />
								<span className="text-white">{filmData.producer}</span>
							</p>
							<p className="text-yellow-700">
								Details: <br />
								<span className="text-white">{filmData.opening_crawl}</span>
							</p>
							<button className="inline-flex h-10 mt-4 items-center justify-center gap-2 whitespace-nowrap rounded bg-yellow-400 px-5 text-sm font-medium tracking-wide text-black transition duration-300 hover:bg-yellow-500 focus:bg-yellow-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300 disabled:shadow-none ">
								Add to Cart
							</button>
						</section>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FilmProductSection;
