// import { useState, useRef, useEffect } from "react";
// import { hasCookie, setCookie } from "cookies-next";

// const Modal = ({ showing }) => {

// 	// const [showConsent, setShowConsent] = useState(true);

// 	// useEffect(() => {
// 	// 	setShowConsent(hasCookie("localConsent"));
// 	// }, []);

// 	// const acceptCookie = () => {
// 	// 	setShowConsent(true);
// 	// 	setCookie("localConsent", "true", {});
// 	// };

// 	// if (showConsent) {
// 	// 	return null;
// 	// }

// 	const [isShowing, setIsShowing] = useState(showing);

// 	const wrapperRef = useRef(null);

// 	useEffect(() => {
// 		function handleClickOutside(event) {
// 			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
// 				setIsShowing(false);
// 			}
// 		}
// 		document.addEventListener("mousedown", handleClickOutside);
// 		return () => {
// 			document.removeEventListener("mousedown", handleClickOutside);
// 		};
// 	}, [wrapperRef]);

// 	useEffect(() => {
// 		let html = document.querySelector("html");

// 		if (html) {
// 			if (isShowing && html) {
// 				html.style.overflowY = "hidden";

// 				const focusableElements =
// 					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

// 				const modal = document.querySelector("#modal"); // select the modal by it's id

// 				const firstFocusableElement =
// 					modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

// 				const focusableContent = modal.querySelectorAll(focusableElements);

// 				const lastFocusableElement =
// 					focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

// 				document.addEventListener("keydown", function (e) {
// 					if (e.keyCode === 27) {
// 						setIsShowing(false);
// 					}

// 					let isTabPressed = e.key === "Tab" || e.keyCode === 9;

// 					if (!isTabPressed) {
// 						return;
// 					}

// 					if (e.shiftKey) {
// 						// if shift key pressed for shift + tab combination
// 						if (document.activeElement === firstFocusableElement) {
// 							lastFocusableElement.focus(); // add focus for the last focusable element
// 							e.preventDefault();
// 						}
// 					} else {
// 						// if tab key is pressed
// 						if (document.activeElement === lastFocusableElement) {
// 							// if focused has reached to last focusable element then focus first focusable element after pressing tab
// 							firstFocusableElement.focus(); // add focus for the first focusable element
// 							e.preventDefault();
// 						}
// 					}
// 				});

// 				firstFocusableElement.focus();
// 			} else {
// 				html.style.overflowY = "visible";
// 			}
// 		}
// 	}, [isShowing]);

// 	const modalHtml = (
// 		<div
// 			className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-neutral-300/20 backdrop-blur-sm"
// 			aria-labelledby="header-2a content-2a"
// 			aria-modal="true"
// 			tabIndex="-1"
// 			role="dialog"
// 		>
// 			{/*    <!-- Modal --> */}
// 			<div
// 				className="flex max-h-[90vh] w-11/12 max-w-md flex-col gap-6 overflow-hidden rounded-xl bg-neutral-900 p-6 text-white shadow-xl shadow-slate-700/10"
// 				ref={wrapperRef}
// 				id="modal"
// 				role="document"
// 			>
// 				{/*        <!-- Modal header --> */}
// 				<header id="header-2a" className="flex items-center gap-4">
// 					<h3 className="flex-1 text-xl font-medium text-white">
// 						Notice from the developer
// 					</h3>
// 					<button
// 						onClick={() => setIsShowing(false)}
// 						className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-yellow-500 transition duration-300 hover:bg-yellow-100 hover:text-yellow-600 focus:bg-yellow-200 focus:text-yellow-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-yellow-300 disabled:shadow-none disabled:hover:bg-transparent"
// 						aria-label="close dialog"
// 					>
// 						<span className="relative only:-mx-5">
// 							<svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								className="h-5 w-5"
// 								fill="none"
// 								viewBox="0 0 24 24"
// 								stroke="currentColor"
// 								strokeWidth="1.5"
// 								role="graphics-symbol"
// 								aria-labelledby="title-79 desc-79"
// 							>
// 								<title id="title-79">Modal Close</title>
// 								<desc id="desc-79">A button used to close the dialog</desc>
// 								<path
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 									d="M6 18L18 6M6 6l12 12"
// 								/>
// 							</svg>
// 						</span>
// 					</button>
// 				</header>
// 				{/*        <!-- Modal body --> */}
// 				<div id="content-2a" className="flex-1 overflow-auto">
// 					<p>
// 						This website is for demonstration purposes only. It is used to
// 						demonstrate developer capabilities for the{" "}
// 						<a
// 							href="http://ezdev.solutions"
// 							target="_blank"
// 							className="hover:underline text-yellow-200 hover:text-yellow-400 transition duration-300"
// 						>
// 							EZdev portfolio
// 						</a>
// 					</p>
// 				</div>
// 				{/*        <!-- Modal actions --> */}
// 				<div className="flex justify-end gap-2">
// 					{/*            <!-- base basic button --> */}
// 					<button
// 						onClick={() => setIsShowing(false)}
// 						className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-yellow-400 px-5 text-sm font-medium tracking-wide text-black transition duration-300 hover:bg-yellow-500 focus:bg-yellow-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300 disabled:shadow-none"
// 					>
// 						<span>Continue</span>
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);

// 	return <>{isShowing && modalHtml}</>;
// };

// export default Modal;

import { useState, useRef, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";

const Modal = ({ showing }) => {
	// const [showConsent, setShowConsent] = useState(true);

	const [isShowing, setIsShowing] = useState();

	// console.log(hasCookie("localConsent"), isShowing);

	const acceptCookie = () => {
		setIsShowing(false);
		setCookie("localConsent", "true", {});
	};

	useEffect(() => {
		setIsShowing(!hasCookie("localConsent"));
	}, []);

	const wrapperRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				acceptCookie();
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [wrapperRef]);

	useEffect(() => {
		let html = document.querySelector("html");

		if (html) {
			if (isShowing && html) {
				html.style.overflowY = "hidden";

				const focusableElements =
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

				const modal = document.querySelector("#modal"); // select the modal by it's id

				const firstFocusableElement =
					modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

				const focusableContent = modal.querySelectorAll(focusableElements);

				const lastFocusableElement =
					focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

				document.addEventListener("keydown", function (e) {
					if (e.keyCode === 27) {
						acceptCookie();
					}

					let isTabPressed = e.key === "Tab" || e.keyCode === 9;

					if (!isTabPressed) {
						return;
					}

					if (e.shiftKey) {
						// if shift key pressed for shift + tab combination
						if (document.activeElement === firstFocusableElement) {
							lastFocusableElement.focus(); // add focus for the last focusable element
							e.preventDefault();
						}
					} else {
						// if tab key is pressed
						if (document.activeElement === lastFocusableElement) {
							// if focused has reached to last focusable element then focus first focusable element after pressing tab
							firstFocusableElement.focus(); // add focus for the first focusable element
							e.preventDefault();
						}
					}
				});

				firstFocusableElement.focus();
			} else {
				html.style.overflowY = "visible";
			}
		}
	}, [isShowing]);

	const modalHtml = (
		<div
			className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-neutral-300/20 backdrop-blur-sm"
			aria-labelledby="header-2a content-2a"
			aria-modal="true"
			tabIndex="-1"
			role="dialog"
		>
			{/*    <!-- Modal --> */}
			<div
				className="flex max-h-[90vh] w-11/12 max-w-md flex-col gap-6 overflow-hidden rounded-xl bg-neutral-900 p-6 text-white shadow-xl shadow-slate-700/10"
				ref={wrapperRef}
				id="modal"
				role="document"
			>
				{/*        <!-- Modal header --> */}
				<header id="header-2a" className="flex items-center gap-4">
					<h3 className="flex-1 text-xl font-medium text-white">
						Notice from the developer
					</h3>
					<button
						onClick={() => acceptCookie()}
						className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-yellow-500 transition duration-300 hover:bg-yellow-100 hover:text-yellow-600 focus:bg-yellow-200 focus:text-yellow-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-yellow-300 disabled:shadow-none disabled:hover:bg-transparent"
						aria-label="close dialog"
					>
						<span className="relative only:-mx-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="1.5"
								role="graphics-symbol"
								aria-labelledby="title-79 desc-79"
							>
								<title id="title-79">Modal Close</title>
								<desc id="desc-79">A button used to close the dialog</desc>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</span>
					</button>
				</header>
				{/*        <!-- Modal body --> */}
				<div id="content-2a" className="flex-1 overflow-auto">
					<p>
						This website is for demonstration purposes only. It is used to
						demonstrate developer capabilities for the{" "}
						<a
							href="http://ezdev.solutions"
							target="_blank"
							className="hover:underline text-yellow-200 hover:text-yellow-400 transition duration-300"
						>
							EZdev portfolio
						</a>
					</p>
				</div>
				{/*        <!-- Modal actions --> */}
				<div className="flex justify-end gap-2">
					{/*            <!-- base basic button --> */}
					<button
						onClick={() => acceptCookie()}
						className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-yellow-400 px-5 text-sm font-medium tracking-wide text-black transition duration-300 hover:bg-yellow-500 focus:bg-yellow-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300 disabled:shadow-none"
					>
						<span>Continue</span>
					</button>
				</div>
			</div>
		</div>
	);
	if (!isShowing) {
		return null;
	}
	return <>{isShowing && modalHtml}</>;
};

export default Modal;
