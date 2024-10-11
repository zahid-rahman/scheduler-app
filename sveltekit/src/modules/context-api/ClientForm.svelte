<script>
	import FormData from "./FormData/FormData.svelte";

	let name;
	let email;
	let address;
	function handleSubmit() {
		console.log(name, email, address);
	}
</script>

<div>
	<h3>client form</h3>
	<form method="post" on:submit|preventDefault={handleSubmit}>
		<input type="text" name="name" placeholder="enter your name" bind:value={name} />
		<br />
		<br />
		<input type="text" name="email" placeholder="enter your email" bind:value={email} />
		<br />
		<br />
		<input type="text" name="address" placeholder="enter your address" bind:value={address} />
		<br />
		<br />
		<button>submit</button>
	</form>

    <FormData {name} {email} {address}/>
</div>
