<script>
	import CountStore from '../../store/countStore';
	let count;
	CountStore.subscribe((data) => {
		count = data;
	});
</script>

<b>{count}</b>
