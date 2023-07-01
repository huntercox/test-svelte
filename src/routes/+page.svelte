<script>
	export let data;

	const settings = data.data.generalSettings;
	const navMenus = data.data.menus.nodes[0].menuItems.nodes;
	console.log(navMenus);
</script>

<div style="font-size: 2rem;">
	<p><strong>Data:</strong></p>
	<pre>{JSON.stringify(data, null, 2)}</pre>
</div>

<header>
	<a href={data.data.generalSettings?.url}><h1>{data.data.generalSettings?.title}</h1></a>
	<nav>
		<ul>
			{#each navMenus as { uri, url, label }, i}
				<li>
					<a href={url}>{label}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
