<script>
	export let data;

	const settings = data.data.generalSettings;
	const navMenus = data.data.menus.nodes[0].menuItems.nodes;
	console.log(navMenus);
</script>

<header>
	<div class="container">
		<a href={data.data.generalSettings?.url}><h1>{data.data.generalSettings?.title}</h1></a>
		<nav>
			<ul>
				{#each navMenus as { uri, url, label }, i}
					<li>
						<a href={uri}>{label}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<main>
	<div style="font-size: 2rem;">
		<p><strong>Data:</strong></p>
		<pre>{JSON.stringify(data, null, 2)}</pre>
	</div>
</main>

<style></style>
