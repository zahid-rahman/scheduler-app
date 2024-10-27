<script>
	import Count from '../../modules/global/Count.svelte';
	import DecrementBtn from '../../modules/global/DecrementBtn.svelte';
	import IncrementBtn from '../../modules/global/IncrementBtn.svelte';
</script>

<div>
	<h1>counter</h1>
	<div style="display: flex;">
		<IncrementBtn/>
		<Count />
		<DecrementBtn />
	</div>
</div>
