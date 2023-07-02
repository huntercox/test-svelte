<script>
	import Header from '../components/Header.svelte';
	export let data;
	const flexLayouts = data.data.pageBy.flexLayouts;
	const imageUrl = flexLayouts?.flexLayouts[1]?.image?.sourceUrl;
	const toggleParallax = flexLayouts?.flexLayouts[1]?.settings?.imageSettings?.toggleParallax;
	const imageHeight = flexLayouts?.flexLayouts[1]?.settings?.imageSettings?.height;
</script>

<Header headerData={data} />



<main>
	<div class="container">
		<!-- <div style="font-size: 1rem;">
			<p><strong>Data:</strong></p>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div> -->

		<div class="content__text-editor">
			{@html flexLayouts?.flexLayouts[0]?.visualEditor}

			{#if toggleParallax}
			<img src="{imageUrl}" class="parallax" height="{imageHeight}px" />
			{:else}
				<img src="{imageUrl}}" height="{imageHeight}px" />
			{/if}



			{@html flexLayouts?.flexLayouts[3]?.visualEditor}
		</div>
	</div>
</main>

<style></style>
