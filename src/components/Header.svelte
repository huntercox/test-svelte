<script>
export let headerData;

const settings = headerData.data.generalSettings;
const navMenus = headerData.data.menus.nodes[0].menuItems.nodes;
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