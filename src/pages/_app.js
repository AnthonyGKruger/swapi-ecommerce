import "@/styles/globals.css";
import Navigation from "@/components/UI/Navigation";
import Footer from "@/components/UI/Footer";
import Modal from "@/components/UI/Modal";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/store";
// import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Provider store={store}>
				<Head>
					<title>Star wars</title>
					<link rel="icon" href="/media/images/star-wars-logo.svg" />
					<meta name="description" content="Star Wars mock e-commerce site" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<Navigation />
				<main className="bg-neutral-900">
					<Component {...pageProps} />
				</main>
				<Modal showing={true} />
				<Footer />
			</Provider>
			{/* <Analytics /> */}
		</>
	);
}
