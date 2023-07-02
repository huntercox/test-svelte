<script>
	export let data;
</script>

<main>
	<div style="font-size: 2rem;">
		<p><strong>Data:</strong></p>
		<pre>{JSON.stringify(data, null, 2)}</pre>
	</div>
</main>