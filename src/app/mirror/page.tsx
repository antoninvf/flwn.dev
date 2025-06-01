'use client';

import styles from './Mirror.module.scss';

export default function HomePage() {
	// 	const theimage = document.getElementById('omori');
	// 	const audio = document.getElementById('sound');

	// 	theomori();
	// 	function theomori() {
	// 		const chance = 50;
	// 		const rng = Math.floor(Math.random() * chance);

	// 		if (rng === 0) {
	// 			theimage.src = 'mirrors/something.gif';
	// 			audio.play();
	// 		} else if (rng === 1) {
	// 			theimage.src = 'mirrors/mari.gif';
	// 			audio.play();
	// 		} else if (rng === 2) {
	// 			theimage.src = 'mirrors/somethingdoor.gif';
	// 		} else if (rng === 3) {
	// 			theimage.src = 'mirrors/somethingdinner.gif';
	// 			audio.play();
	// 		} else {
	// 			theimage.src = 'mirrors/alone.gif';
	// 			audio.pause();
	// 		}
	// 	}

	// 	setInterval(theomori, 5000);
	// };

	return (
		<>
			<audio
				src="mirrors/acrophobia.mp3"
				id="sound"
				loop
				style={{ display: 'none' }}
			/>
			<div className={styles.blending}></div>

			<div className={styles.bgcontainer}>
				<img
					src="mirrors/alone.gif"
					id="omori"
					className={styles.omori}
					alt=""
				/>
			</div>

			<script src="mirrors/index.js" async defer></script>
		</>
	);
}
