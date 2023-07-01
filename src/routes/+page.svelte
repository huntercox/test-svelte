<script>
	// export let data;
	//console.log(data);

	import { onMount } from 'svelte';
	let pages;
	let query = `
		query siteInfo {
			generalSettings {
				title
				url
			}
		}
	`;

	onMount(async () => {
		const res = await fetch('http://huntercoxdev.local/graphql', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query })
		});
		const json = await res.json();
		pages = json.data;
		console.log(pages);
	});
</script>

<div>
	<p><strong>Data:</strong></p>
	<pre>{JSON.stringify(pages, null, 2)}</pre>
	<!-- <ul>
		{#each data.data as { pageId, title }, i}
			<li>
				{title}
			</li>
		{/each}
	</ul> -->
</div>
