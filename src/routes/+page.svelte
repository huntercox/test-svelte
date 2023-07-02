<script>
	export let data;
	const flexLayouts = data.data.pageBy.flexLayouts;
	console.log(flexLayouts);

	import Header from '../components/Header.svelte';
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

			<img src="{flexLayouts?.flexLayouts[1]?.image?.sourceUrl}" />

			{@html flexLayouts?.flexLayouts[3]?.visualEditor}
		</div>
	</div>
</main>

<style></style>
