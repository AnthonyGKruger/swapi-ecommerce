import { useState } from "react";
// import logo from "/media/images/star-wars-logo.svg"
import Image from "next/image";
import { useRouter } from "next/router";
import Auth from "../functional/Auth";

const Navigation = () => {
	const [isToggleOpen, setIsToggleOpen] = useState(false);
	const { asPath } = useRouter();

	return (
		<>
			<header className="border-b-1 relative z-20 w-full border-b border-yellow-200 bg-neutral-900 shadow-lg shadow-yellow-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-yellow-200 lg:border-yellow-200 lg:backdrop-blur-sm lg:after:hidden">
				<div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
					<nav
						aria-label="main navigation"
						className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
						role="navigation"
					>
						<a
							id="Logo"
							aria-label="logo"
							aria-current="page"
							className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
							href="/"
						>
							<Image
								src={"/media/images/star-wars-logo.svg"}
								width={100}
								height={100}
								alt="Star wars"
								priority
							/>
						</a>

						<button
							className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
								isToggleOpen
									? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
									: ""
							}
            `}
							onClick={() => setIsToggleOpen(!isToggleOpen)}
							aria-expanded={isToggleOpen ? "true" : "false"}
							aria-label="Toggle navigation"
						>
							<div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-yellow-400 transition-all duration-300"
								></span>
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-6 transform rounded-full bg-yellow-400 transition duration-300"
								></span>
								<span
									aria-hidden="true"
									className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-yellow-400 transition-all duration-300"
								></span>
							</div>
						</button>

						<ul
							role="menubar"
							aria-label="Select page"
							className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-neutral-900 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-neutral-900 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
								isToggleOpen
									? "visible opacity-100 backdrop-blur-sm"
									: "invisible opacity-0"
							}`}
						>
							<li role="none" className="flex items-stretch">
								<a
									role="menuitem"
									aria-haspopup="false"
									tabIndex="0"
									className={`${
										asPath === "/products" ? "border-b-2 border-yellow-200" : ""
									} flex items-center gap-2 py-4 text-yellow-400 transition-colors duration-300 hover:text-yellow-600 hover:border-b-2 hover:border-yellow-200 focus:outline-none focus-visible:outline-none lg:px-8`}
									// className="flex items-center gap-2 py-4 hover:underline text-yellow-400 transition-colors duration-300 hover:text-yellow-600 focus:border-b-8 focus:outline-none focus-visible:outline-none lg:px-8"
									href="/films/"
								>
									<span>Products</span>
								</a>
							</li>
							<li role="none" className="flex items-stretch">
								<a
									role="menuitem"
									aria-current="page"
									aria-haspopup="false"
									tabIndex="0"
									className="flex items-center gap-2 py-4 text-yellow-400 transition-colors duration-300 hover:text-yellow-600 hover:border-b-2 hover:border-yellow-200 focus:outline-none focus-visible:outline-none lg:px-8"
									href="#"
								>
									<span>About</span>
								</a>
							</li>
							<li role="none" className="flex items-stretch">
								<a
									role="menuitem"
									aria-haspopup="false"
									tabIndex="0"
									className="flex items-center gap-2 py-4 text-yellow-400 transition-colors duration-300 hover:text-yellow-600 hover:border-b-2 hover:border-yellow-200 focus:outline-none focus-visible:outline-none lg:px-8"
									href="#"
								>
									<Image
										src="/media/images/cart.svg"
										alt="Cart"
										width={30}
										height={30}
										className="hover:animate-bounce"
									/>
									Cart
								</a>
							</li>
							<li role="none" className="flex items-stretch">
								{/* <a
									role="menuitem"
									aria-haspopup="false"
									tabIndex="0"
									className="flex items-center gap-2 py-4 text-yellow-400 transition-colors duration-300 hover:text-yellow-600 hover:border-b-2 hover:border-yellow-200 focus:outline-none focus-visible:outline-none lg:px-8"
									href="#"
								>
									<Image
										src="/media/images/avatar.svg"
										alt="user name"
										title="user name"
										width="25"
										height="25"
										className="hover:animate-bounce"
									/>
									Sign In
								</a> */}
								<Auth/>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};
export default Navigation;
