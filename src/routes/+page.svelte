<script>
	import Logo from '$lib/components/Logo.svelte';
</script>

<Logo />

<div class="module">
	<h1>work in progress</h1>
	<p>i am currently remaking my website<br>using svelte this time:)</p>
	<img src="img/construction.gif" alt="a bunch of different construction gifs" height="300" />
	<p>check me out on these in the meantime</p>
	<div class="socials">
		<a href="https://bsky.app/profile/flwn.dev">bluesky</a>
		<a href="https://github.com/flowyan">github</a>
		<a href="https://modrinth.com/user/Flowyan">modrinth</a>
	</div>
</div>

<style>
    .module {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color-bg);
        padding: 15px;
        border: 1px solid white;
    }

    p {
        text-align: center;
    }

    img {
        margin: 15px;
    }

    .socials {
        display: flex;
        margin-top: 15px;
        gap: 15px;

        a {
            padding: 5px 15px;
            background-color: white;

            &:hover {
                color: white;
                background-color: var(--color-text);
            }
        }
    }
</style>