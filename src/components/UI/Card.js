import Image from "next/image";

const Card = ({ title, subHeading, details, imageUrl, link }) => {
	return (
		<a
			className={`col-span-4 pointer lg:col-span-3 text-ellipses overflow-hidden rounded-xl bg-neutral-900 text-slate-50 shadow-md shadow-yellow-700`}
			href={link}
		>
			<div
				// className={`col-span-4 lg:col-span-3 text-ellipses overflow-hidden rounded-xl bg-neutral-900 text-slate-50 shadow-md shadow-yellow-700`}
			>
				<figure>
					<Image
						src={imageUrl}
						alt="card image"
						className="w-full rounded-t-xl"
						width={100}
						height={100}
						priority
					/>
				</figure>

				<div className="p-6">
					<header className="mb-4">
						<h3 className="text-xl font-medium text-yellow-600">
							Star Wars: {title}
						</h3>
						<p className="text-sm text-slate-400">{subHeading}</p>
					</header>
					<p className="cardDescription">{details}</p>
					<button className=" mt-5 inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-yellow-400 px-5 text-sm font-medium tracking-wide text-black transition duration-300 hover:bg-yellow-500 focus:bg-yellow-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300 disabled:shadow-none">
						View More
					</button>
				</div>
			</div>
		</a>
	);
};

export default Card;
