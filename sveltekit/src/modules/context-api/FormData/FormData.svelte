<script>
	import Block from "./Block.svelte";

    export let email;
    export let name;
    export let address;
</script>
<div style="border:2px solid black; margin: 10px 0px; border-radius: 10px">
    <h3 style="padding: 0px 10px; text-transform: capitalize">form data</h3>
   <Block label={"Name"} value={name}/> 
   <Block label={"Email"} value={email}/> 
   <Block label={"Address"} value={address}/> 
</div>