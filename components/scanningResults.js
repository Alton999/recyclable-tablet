import React, { useState, useEffect } from "react";

import QrGenerator from "./qrGenerator";
import Button from "./button";
import styles from "../styles/loader.module.css";

const ResultsCard = ({ result }) => {
	// console.log(result);

	// const [animationType, setAnimationType] = useState(null);

	const [isLoading, setIsLoading] = useState(true);

	const reloadPage = () => {
		window.location.reload();
	};

	const generateColour = (binType) => {
		if(binType === "Recycling") {
			return "Orange";
		} else if (binType === "Paper") {
			return "Blue"
		} else {
			return "Red"
		}
	}


	const generateLoading = (binType) => {
		if (binType === "Recycling") {
			// setColourBin("Orange")
			return (
				<figure className={styles.loaderContainer}>
					<div className={styles.recycling}></div>
					<div></div>
				</figure>
			);
		} else if (binType === "Paper") {
			// setColourBin("Blue")
			return (
				<figure className={styles.loaderContainer}>
					<div className={styles.paper}></div>
					<div></div>
				</figure>
			);
		} else {
			// setColourBin("Red")
			return (
				<figure className={styles.loaderContainer}>
					<div className={styles.general}></div>
					<div></div>
				</figure>
			);
		}
	};

	useEffect(() => {
		// setIsLoading(true);

		// setAnimationType(result.bin);
		// console.log(animationType);

		setTimeout(() => {
			setIsLoading(false);
		}, 7000);
	}, []);

	// Here I should read the results
	return (
		// This here would be the card component
		<div className="w-full h-90v flex items-center justify-center mx-auto">
			<div className="Result-section flex flex-col items-center justify-center mx-auto border-4 border-amber-700 w-full text-center py-14">
				<h1 className="text-3xl font-bold">Thank you for using</h1>
				<div className="text-4xl mt-4">
					recyc | <span className="font-bold">ABLE</span>
				</div>

				{isLoading ? (
					<>
						<h1 className="mt-14 text-3xl">
							<span className="font-bold">Item: </span>
							{result.item}
						</h1>
						<div>
							<div className="flex justify-center mt-14">
								{generateLoading(result.bin)}
							</div>

							<h2 className="text-2xl font-bold mt-10">
								Please place the item in the <span className="font-bold">{generateColour(result.bin)}</span> lit up bin.
							</h2>
						</div>
					</>
				) : (
					// This container would be the post disposal message, should include a QR code
					<div className="mt-14">
						<h3 className="text-4xl font-bold text-amber-700">
							Disposal Successful!
						</h3>
						<p className="text-xl my-4 px-4">
							Please use the QR code provided in the instructions to access the mobile application and scan this QR code!
						</p>
						<QrGenerator result={result} />
						<section className="mt-5">
							<Button func={reloadPage} text="Restart" />
						</section>
					</div>
				)}
			</div>
		</div>
	);
};

export default ResultsCard;
