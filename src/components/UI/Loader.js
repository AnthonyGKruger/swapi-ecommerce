const Loader = () => {
	return (
		<section>
			<div className="container px-6 m-auto py-[20rem]">
			{/* <div className="container px-6 m-auto py-24"> */}
				<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
					<div className="col-span-4 md:col-span-8 lg:col-span-12 text-center">
						<svg
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-live="polite"
							aria-busy="true"
							aria-labelledby="title-08a desc-08a"
							className="h-16 w-16 mx-auto"
						>
							<title id="title-08a">Icon title</title>
							<desc id="desc-08a">Some desc</desc>
							<path
								d="M7 8H3V16H7V8Z"
								className="animate animate-bounce fill-yellow-400 "
							/>
							<path
								d="M14 8H10V16H14V8Z"
								className="animate animate-bounce fill-yellow-400 [animation-delay:.2s]"
							/>
							<path
								d="M21 8H17V16H21V8Z"
								className="animate animate-bounce fill-yellow-400 [animation-delay:.4s]"
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Loader;
