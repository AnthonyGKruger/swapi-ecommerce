import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
	dataHandler,
	userActions,
	validateEmail,
	validateName,
	validatePassword,
} from "@/store/userSlice";

const Auth = () => {
	const dispatch = useDispatch();
	const userState = useSelector((state) => state.user);

	const [isShowing, setIsShowing] = useState(false);
	const [showRegister, setShowRegister] = useState(false); // show login by default

	const wrapperRef = useRef(null);

	const inputValidator = (type) => {
		if (type == "login") {
			if (
				validateEmail(userState.email) &&
				validatePassword(userState.password)
			) {
				dispatch(
					dataHandler({
						action: "login",
						userEmail: userState.user.email,
						userPassword: userState.user.password,
					})
				);
			} else {
				dispatch(userActions.setError({ hasError: true }));
			}
		} else if (type == "register") {
			if (
				validateEmail(userState.email) &&
				validateName(userState.name) &&
				validatePassword(userState.password)
			) {
				dispatch(
					dataHandler({
						action: "register",
						userEmail: userState.user.email,
						userPassword: userState.user.password,
						userName: userState.user.name,
					})
				);
			} else {
				dispatch(userActions.setError({ hasError: true }));
			}
		}
	};

	useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setIsShowing(false);
				dispatch(userActions.setError({ hasError: false }));
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
						setIsShowing(false);
						dispatch(userActions.setError({ hasError: false }));
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

	// userState.notExistingUser ? setShowRegister(true) : "";

	const formContent = (
		<div
			ref={wrapperRef}
			className="md:w-[50vw]  border-2 border-yellow-400 shadow-yellow-400 flex max-h-[90vh] max-w-sm flex-col gap-4 overflow-hidden bg-neutral-900 rounded-3xl p-6 text-white shadow-xl transition-all delay-750"
			id="modal"
			role="document"
		>
			{/*        <!-- Modal header --> */}
			<header id="header-4a" className="flex items-center">
				<h3
					className={`flex-1 text-lg font-medium ${
						userState.error ? "text-red-400" : "text-white"
					}`}
				>
					{showRegister
						? userState.user.isLoggedIn
							? ""
							: userState.error
							? "There is an error with the form input fields"
							: "Register Now!"
						: userState.user.isLoggedIn
						? ""
						: userState.error
						? "There is an error with the form input fields"
						: "Welcome back!"}
				</h3>
				<button
					onClick={() => {
						dispatch(userActions.setError({ hasError: false }));
						setIsShowing(false);
					}}
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
							<title id="title-79">Icon title</title>
							<desc id="desc-79">A more detailed description of the icon</desc>
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

			<div id="content-4a" className="flex-1">
				<div className="flex flex-col gap-6">
					{/*                <!-- Input field --> */}
					{showRegister && !userState.user.isLoggedIn && (
						<div className="relative">
							<input
								id="id-b03"
								type="text"
								name="id-b03"
								placeholder="your name"
								className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-red-500 invalid:text-red-500 focus:border-yellow-500 focus:outline-none invalid:focus:border-red-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
								onChange={() => {
									dispatch(
										userActions.inputChangeHandler({
											value: event.target.value,
											type: "NAME",
										})
									);
								}}
							/>
							<label
								htmlFor="id-b03"
								className="absolute left-2 -top-4 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-500 peer-invalid:peer-focus:text-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
							>
								Your name
							</label>
							<small className="absolute flex w-full justify-between px-4 py-1 text-xs text-yellow-400 transition peer-invalid:text-red-500">
								<span>Type your name</span>
							</small>
						</div>
					)}

					{/*                <!-- Input field --> */}
					<div className={`relative ${showRegister ? "mt-6" : ""}`}>
						<input
							id="id-b03"
							type="email"
							name="id-b03"
							placeholder="your name"
							className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-red-500 invalid:text-red-500 focus:border-yellow-500 focus:outline-none invalid:focus:border-red-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
							onChange={() => {
								dispatch(
									userActions.inputChangeHandler({
										value: event.target.value,
										type: "EMAIL",
									})
								);
							}}
						/>
						<label
							htmlFor="id-b03"
							className="absolute left-2 -top-4 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-500 peer-invalid:peer-focus:text-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
						>
							Your email
						</label>
						<small className="absolute flex w-full justify-between px-4 py-1 text-xs text-yellow-400 transition peer-invalid:text-red-500">
							<span>Type your email address</span>
						</small>
					</div>
					{/*                <!-- Input field --> */}
					<div className="relative my-6">
						<input
							id="id-b13"
							type="password"
							name="id-b13"
							placeholder="your password"
							className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-red-500 invalid:text-red-500 focus:border-yellow-500 focus:outline-none invalid:focus:border-red-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
							onChange={() => {
								dispatch(
									userActions.inputChangeHandler({
										value: event.target.value,
										type: "PASSWORD",
									})
								);
							}}
						/>
						<label
							htmlFor="id-b13"
							className="absolute left-2 -top-4 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-red-500 peer-required:after:content-['\00a0*'] peer-invalid:text-red-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-yellow-500 peer-invalid:peer-focus:text-red-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
						>
							Your password
						</label>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="1.5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
							/>
						</svg>
						<small className="absolute flex w-full justify-between px-4 py-1 text-xs text-yellow-400 transition peer-invalid:text-red-500">
							<span>Type your password</span>
						</small>
					</div>
				</div>
			</div>
			{/*        <!-- Modal actions --> */}
			<div
				onClick={() => {
					setShowRegister((state) => !state);
				}}
				className="w-full"
			>
				<span className="text-center mx-auto w-full block text-yellow-400 hover:underline">
					{showRegister
						? "Already a user? Login here!"
						: "Not a user? Register here!"}
				</span>
			</div>
			<div className="flex justify-center gap-2">
				<button
					onClick={() => {
						// setShowRegister(false);
						if (userState.user.password.length < 4) {
							dispatch(userActions.setError({ hasError: true }));
							return;
						}
						showRegister
							? ""
							: dispatch(
									dataHandler({
										action: "login",
										userEmail: userState.user.email,
										userPassword: userState.user.password,
									})
							  );
					}}
					className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-yellow-400 px-5 text-sm font-medium tracking-wide text-black transition duration-300 hover:bg-yellow-500 focus:bg-yellow-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300 disabled:shadow-none"
				>
					<span>{showRegister ? "Register" : "Login"}</span>
				</button>
			</div>
		</div>
	);

	const loggedInContent = (
		<div
			ref={wrapperRef}
			className="w-[50vw] border-2 border-yellow-400 shadow-yellow-400 flex max-h-[90vh] max-w-sm flex-col gap-4 overflow-hidden bg-neutral-900 rounded-3xl p-6 text-white shadow-xl"
			id="modal"
			role="document"
		>
			{/*        <!-- Modal header --> */}
			<header id="header-4a" className="flex items-center">
				<h3 className="flex-1 text-lg font-medium text-yellow-400">
					You have successfully logged in!
				</h3>
				<button
					onClick={() => {
						dispatch(userActions.setError({ hasError: false }));
						setIsShowing(false);
					}}
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
							<title id="title-79">Icon title</title>
							<desc id="desc-79">A more detailed description of the icon</desc>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</span>
				</button>
			</header>
			<div>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="fill-yellow-400"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-12 h-12 mx-auto stroke-yellow-400"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</span>
			</div>
		</div>
	);

	return (
		<>
			<button
				onClick={() =>
					userState.user.isLoggedIn
						? dispatch(userActions.logoutHandler())
						: setIsShowing(true)
				}
				className="flex items-center gap-2 py-4 text-yellow-400 transition-colors duration-300 hover:text-yellow-600 hover:border-b-2 hover:border-yellow-200 focus:outline-none focus-visible:outline-none lg:px-8"
			>
				<Image
					src="/media/images/avatar.svg"
					alt="user name"
					title="user name"
					width="25"
					height="25"
					className="hover:animate-bounce"
				/>

				<span>{userState.user.isLoggedIn ? "Log Out" : "Sign In"}</span>
			</button>

			{isShowing && typeof document !== "undefined"
				? ReactDOM.createPortal(
						<div
							className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
							aria-labelledby="header-4a content-4a"
							aria-modal="true"
							tabIndex="-1"
							role="dialog"
						>
							{/*    <!-- Modal --> */}
							{!userState.user.isLoggedIn && formContent}
							{userState.user.isLoggedIn && loggedInContent}
						</div>,
						document.body
				  )
				: null}
		</>
	);
};

export default Auth;
