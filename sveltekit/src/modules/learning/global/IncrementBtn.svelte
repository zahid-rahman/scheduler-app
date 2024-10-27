<script>
	import CountStore from '../../store/countStore';
	let count;
	function increment() {
		CountStore.update((currentData) => {
			return (currentData += 1);
		});
	}
	CountStore.subscribe((data) => {
		count = data;
	});
	if (count > 0) {
		CountStore.update((currentData) => {
			return { ...currentData, buttonDisabled: false };
		});
	}
</script>

<div>
	<button on:click={increment} style="margin: 0px 10px;">+</button>
</div>
