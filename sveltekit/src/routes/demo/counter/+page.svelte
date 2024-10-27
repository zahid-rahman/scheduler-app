<script>
	import Count from '../../modules/counter/Count.svelte';
	import Decrement from '../../modules/counter/Decrement.svelte';
	import Increment from '../../modules/counter/Increment.svelte';

	let count = 0;

	const increment = () => (count += 1);
	const decrement = () => (count -= 1);
</script>

<div>
	<h1>counter</h1>
	<div style="display: flex;">
		<Increment {increment} />
		<Count {count} />
		<Decrement {decrement} />
	</div>
</div>
