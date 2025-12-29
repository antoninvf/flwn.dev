<script lang="ts">
	const SOUNDS = [
		{ name: 'boing.mp3', volume: 0.9 },
		{ name: 'boing2.mp3', volume: 0.9 },
		// { name: 'boing3.mp3', volume: 0.9 },
		{ name: 'boing4.mp3', volume: 0.9 },
		{ name: 'punch.mp3', volume: 0.3 },
		{ name: 'spring.mp3', volume: 0.7 },
		// { name: 'lala.mp3', volume: 0.3 },
		{ name: 'gnarp1.mp3', volume: 0.3 },
		{ name: 'gnarp2.mp3', volume: 0.3 },
		{ name: 'gnarp3.mp3', volume: 0.3 }
	];

	const NAME = 'FLWN.DEV';
	const NAME_SPLIT = NAME.split('');

	function playSound() {
		const randomIndex = Math.floor(Math.random() * SOUNDS.length);
		const soundFile = SOUNDS[randomIndex];

		const audio = new Audio(`/sfx/${soundFile.name}`);
		audio.volume = 0.5;
		audio.play();
	}
</script>

<div class="logo">
	{#each NAME_SPLIT as letter (letter)}
		<div class="letter" onclick={playSound} aria-hidden="true">{letter}</div>
	{/each}
</div>

<style>
	.logo {
		color: whitesmoke;
		display: flex;
		font-size: 5rem;
		font-weight: bolder;
	}

	.letter {
		user-select: none;
		transition: all 0.1s ease;

		&:hover {
			transform: scale(1.05);
			opacity: 0.9;
			cursor: pointer;
		}

		&:active {
			transform: scale(0.95) translateY(4px);
			opacity: 0.75;
		}
	}
</style>
