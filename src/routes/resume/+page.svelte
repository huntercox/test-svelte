<script>
	// RESUME PAGE
	export let data;
	import Header from '../../components/Header.svelte';

	const pageTitle = data.data.pageBy.title;
	const pageContent = data.data.pageBy.content;

	// Employers
	const employers = data.data.employers.nodes;
</script>

<Header headerData={data} />

<main>
	<div class="container">
		<h2>{pageTitle}</h2>

		<div class="content__text-editor">
			{@html pageContent}
		</div>

		{#if employers.length > 0}
			<h3>Employers</h3>

			<div class="employers">
				{#each employers as { title, employmentDetails }, i}
					{@const startMonth = employmentDetails.status.startDate.month}
					{@const startYear = employmentDetails.status.startDate.year}
					{@const endMonth = employmentDetails.status.endDate.month}
					{@const endYear = employmentDetails.status.endDate.year}
					<div
						class={employmentDetails.status.currentEmployer
							? 'employer employer--current'
							: 'employer'}
					>
						{#if employmentDetails.status.currentEmployer === true}
							<span class="current-employer">Current Employer</span>
						{/if}

						<h4>{title}</h4>
						<p>{employmentDetails.jobTitle}</p>
						<p><em>Location:</em> {employmentDetails.location}</p>
						<p><em>Start Date:</em> {startMonth} {startYear}</p>
						{#if employmentDetails.status.currentEmployer !== true}
							<p><em>End Date:</em> {endMonth} {endYear}</p>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</main>

<style></style>
