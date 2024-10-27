<script>
	import CountStore from '../../store/countStore';
	let count;

	function decrement() {
		CountStore.update((currentData) => {
			return (currentData -= 1);
		});
	}
	CountStore.subscribe((data) => {
		count = data;
	});

</script>

<div>
	<button on:click={decrement} style="margin: 0px 10px;" disabled={count <= 0}>-</button>
</div>
