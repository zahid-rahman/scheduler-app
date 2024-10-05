<script>
	import Input from '../../modules/input/Input.svelte';
	import Output from '../../modules/input/Output.svelte';
	let inputValue = '';
</script>

<div>
	<Input bind:inputValue />
	<Output {inputValue} />
</div>
