<script>
export let headerData;

const settings = headerData.data.generalSettings;
const navMenus = headerData.data.menus.nodes[0].menuItems.nodes;
</script>

<div class="container">
	<h2 style="text-align: center;">Header</h2>
</div>

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