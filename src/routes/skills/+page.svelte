<script>
	// SKILLS PAGE
	export let data;
	import Header from '../../components/Header.svelte';

	const pageTitle = data.data.pageBy.title;
	const pageContent = data.data.pageBy.content;
</script>

<Header headerData={data} />

<main>
	<div class="container">
		<h2>{pageTitle}</h2>
		<div class="content__text-editor">
			{@html pageContent}
		</div>
	</div>
</main>

<style></style>
