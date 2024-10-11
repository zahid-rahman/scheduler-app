<script>
	import FormData from "./FormData/FormData.svelte";
    export let form;
    import { page } from '$app/stores';
    $: formResponse = $page.form?.default
    console.log('form', formResponse)
</script>

<div>
	<h3>Server form</h3>
	<form method="post">
		<input type="text" name="name" placeholder="enter your name" />
		<br />
		<br />
		<input type="text" name="email" placeholder="enter your email"  />
		<br />
		<br />
		<input type="text" name="address" placeholder="enter your address" />
		<br />
		<br />
		<button>submit</button>
	</form>

    <!-- <FormData {name} {email} {address}/> -->
</div>
