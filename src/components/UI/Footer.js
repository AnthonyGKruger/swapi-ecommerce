import Image from "next/image";

const Footer = () => {
	return (
		<>
			{/*    <!-- Component: Footer with Three Columns and Sub Footer --> */}
			<footer className="w-full text-yellow-500">
				{/*      <!-- Main footer --> */}
				<div className="border-t border-yellow-200 bg-neutral-900 pt-16 pb-12 text-sm">
					<div className="container mx-auto px-6">
						<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
							<nav
								className="col-span-2 md:col-span-4 lg:col-span-4"
								aria-labelledby="footer-product-3-sub"
							>
								<h3
									className="mb-6 text-base font-medium text-yellow-700"
									id="footer-product-3-sub"
								>
									Product
								</h3>
								<ul>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-yellow-500 focus:text-yellow-600"
										>
											Features
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-yellow-500 focus:text-yellow-600"
										>
											Customers
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-yellow-500 focus:text-yellow-600"
										>
											Why us?
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-yellow-500 focus:text-yellow-600"
										>
											Pricing
										</a>
									</li>
								</ul>
							</nav>
							<nav
								className="col-span-2 md:col-span-4 lg:col-span-4"
								aria-labelledby="footer-about-3-sub"
							>
								<h3
									className="mb-6 text-base font-medium text-yellow-700"
									id="footer-about-3-sub"
								>
									About us
								</h3>
								<ul>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-yellow-500 focus:text-yellow-600"
										>
											About us
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-yellow-500 focus:text-yellow-600"
										>
											Careers
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-yellow-500 focus:text-yellow-600"
										>
											Leadership
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-yellow-600"
										>
											Blog
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-yellow-500 focus:text-yellow-600"
										>
											Events
										</a>
									</li>
								</ul>
							</nav>
							<nav
								className="col-span-2 md:col-span-4 lg:col-span-4"
								aria-labelledby="footer-get-in-touch-3-sub"
							>
								<h3
									className="mb-6 text-base font-medium text-yellow-700"
									id="footer-get-in-touch-3-sub"
								>
									Get in touch
								</h3>
								<ul>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-yellow-500 focus:text-yellow-600"
										>
											Contact
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-yellow-500 focus:text-emyellowrald-600"
										>
											Support
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-yellow-500 focus:text-yellow-600"
										>
											Partners
										</a>
									</li>
									<li className="mb-2 leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-yellow-500 focus:text-yellow-600"
										>
											Join research
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				{/*      <!-- Sub Footer --> */}
				<div className="border-t border-yellow-200 bg-neutral-900 py-4 text-sm">
					<div className="container mx-auto px-6">
						<div className="grid grid-cols-4 items-center gap-6 md:grid-cols-8 lg:grid-cols-12">
							<a
								id="WindUI-3-sub"
								aria-label="WindUI logo"
								aria-current="page"
								className="col-span-1 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 focus:outline-none md:col-span-4 lg:col-span-6"
								href="#"
							>
								<Image
									src={"/media/images/star-wars-logo.svg"}
									width={100}
									height={100}
									alt="Star wars"
								/>
							</a>
							<nav
								className="col-span-3 md:col-span-4 lg:col-span-6"
								aria-labelledby="subfooter-links"
							>
								<h3 className="sr-only" id="subfooter-links">
									Get in touch
								</h3>
								<ul className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
									<li className="leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
										>
											T&C
										</a>
									</li>
									<li className="leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
										>
											Privacy
										</a>
									</li>
									<li className="leading-6">
										<a
											href="#"
											className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
										>
											Cookies
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</footer>
			{/*    <!-- End Footer with Three Columns and Sub Footer --> */}
		</>
	);
};

export default Footer;
