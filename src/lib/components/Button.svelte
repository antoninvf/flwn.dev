<script lang="ts">
</script>

<button>
	<slot />
</button>

<style lang="scss">
	button {
		font-family: var(--font-body);
		font-weight: bolder;
		background-color: var(--color-primary);
		outline: none;
		border: 1px solid var(--color-text);
		color: var(--color-text);
		padding: 0.5rem 1.5rem;

		&:hover {
			background-color: var(--color-secondary);
		}

		&:active {
			transform: scale(0.95);
		}
	}
</style>
