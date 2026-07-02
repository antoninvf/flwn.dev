<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import '$lib/layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app">
	<main>
		{@render children()}
	</main>

<!--	<footer>-->
<!--		<p>-->
<!--			<a href="https://github.com/flowyan">github</a>-->
<!--			<a href="https://bsky.app/profile/flwn.dev">bluesky</a>-->
<!--		</p>-->
<!--	</footer>-->
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
				justify-content: center;
        align-items: center;
        padding: 1rem;
        width: 100%;
        box-sizing: border-box;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    footer a {
        font-weight: bold;
    }

    @media (min-width: 480px) {
        footer {
            padding: 12px 0;
        }
    }
</style>
