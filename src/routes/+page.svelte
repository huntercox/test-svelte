<script>
	export let data;

	const settings = data.data.generalSettings;
	const navMenus = data.data.menus.nodes[0].menuItems.nodes;
	const flexLayouts = data.data.pageBy.flexLayouts;
	console.log(data);
</script>

<header>
	<div class="container">
		<a href={settings?.url}><h1>{settings?.title}</h1></a>
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
	<div class="container">
		<!-- <div style="font-size: 1rem;">
			<p><strong>Data:</strong></p>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div> -->

		<div class="content">
			{@html flexLayouts?.flexLayouts[0]?.visualEditor}
		</div>
	</div>
</main>

<style></style>
