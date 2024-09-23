<script>
    import { goto } from '$app/navigation';

    function handleClick () {
        console.log('clicked');
        goto('/about')
    }
</script>

<h2>Home page</h2>

<button on:click={handleClick}>go to about page</button>